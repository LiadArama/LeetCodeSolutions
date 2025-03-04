/*
Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

// [0,1,1,1,0,1,1,0,1]
//s ^
//e ^

var longestSubarray = function (nums) {
  let start = 0,
    end = 0,
    longestSubArr = 0;

  while (end < nums.length) {
    while (nums[start] != 0 && start < nums.length) end = ++start;
    while (start - 1 >= 0 && nums[start - 1] != 0) start--;
    while (end + 1 < nums.length && nums[end + 1] != 0) end++;
    longestSubArr = Math.max(longestSubArr, (end === nums.length ? end - 1 : end) - start);
    start = ++end;
  }
  return longestSubArr;
};

// ################# efficent solution #################
var longestSubarrayFixed = function (nums) {
  const n = nums.length;
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};
