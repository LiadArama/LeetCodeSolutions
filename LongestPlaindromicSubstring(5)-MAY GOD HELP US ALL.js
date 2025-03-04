/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/
var longestPalindrome = function (s) {
  let maxSubPlaindromeIndexes = [0, 1]; // we will use a tuple where index 0 will be the start index, and index 1 will be the end index, like [2,7].
  function getPalindromeAtIndexes(left, right, s) {
    // outwards checking.
    while (left >= 0 && right < s.length) {
      // base case wjere we go out of bounds.
      if (s[left] !== s[right]) break; // stop looping if we are not in a palindrome.
      left--;
      right++;
    }

    return [left + 1, right]; // we need to give left + 1 because we decrement it to be out of bounds eventually, and right can stay the same because when we later on will slice it, it will not include the right index, THATS HOW SLICING WORKS IN JAVASCRIPT. if it did include we would need to decrement right as well.
  }

  for (let i = 0; i < s.length; i++) {
    // we will iterate on each character and do outwards checking, leads to O(n^2).
    // for "babad"
    // -> b -> break;
    // -> a -> bab -> break;
    // -> b -> aba -> babad -> break;
    // -> a -> bad -> break;
    // -> d -> break;
    let odd = getPalindromeAtIndexes(i - 1, i + 1, s); // for the case of b (index 2) -> 1, 3 indexes will be inputted. since the plaindrome is odd, this will fit. suits for odd lengths of palindromes.
    let even = getPalindromeAtIndexes(i - 1, i, s); // for the case of "cbbd" -> we want the b at index 1 and 2 to be sent, since there is no center with one char. suits for even lengths of palindromes.
    let currMaxPalindromeIndexes = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // remember that the values inside odd and even are tuples with the start and end indexes as values.

    maxSubPlaindromeIndexes =
      maxSubPlaindromeIndexes[1] - maxSubPlaindromeIndexes[0] >
      currMaxPalindromeIndexes[1] - currMaxPalindromeIndexes[0]
        ? maxSubPlaindromeIndexes
        : currMaxPalindromeIndexes; // compare the max value and take the greatest.
  }
  return s.slice(maxSubPlaindromeIndexes[0], maxSubPlaindromeIndexes[1]); // REMEMBER: slice does not include the last index when slicing the string. therefore we dont need to increment the right index in the getPlaindromeIndexes function.
};

longestPalindrome("bb");
