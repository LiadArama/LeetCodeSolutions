/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  // We use the sliding window approach, Where we dont over calcualte iterations where we have duplicate characters.
  let maxLen = 0;
  let left = 0;
  let currWindowSet = new Set(); // Creating a set, we can use that to determine if a substring has a duplicate or not.

  for (let right = 0; right < s.length; right++) {
    while (currWindowSet.has(s[right])) {
      // Check if the is duplication.
      currWindowSet.delete(s[left]); // delete the duplication and minimize the window from the left.
      left++; // move the left pointer by one (part of minimzing the sliding window)
    }
    currWindowSet.add(s[right]); // adding the newly substring characters to the substring.
    maxLen = Math.max(maxLen, right - left + 1); // we add 1 in case the longest substring is 1 character, for example: "a" -> (right = 0) - (left = 0) + 1 = 0
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abaccedgh"));
