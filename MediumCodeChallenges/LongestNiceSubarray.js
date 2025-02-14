function longestSubarray(arr) {
  // longest subarray needs to be contigious (no combination or permutation)
  // Write your code here
  console.log(arr);
  let maxLen = 0;
  if (arr.length <= 1) return maxLen;
  let distinctNums = new Set(); // can contain no more than 2 values.
  let start = 0; // starting index;
  distinctNums.add(arr[start]); // initiate the set with atleast one element since arr is at least length of 2.
  // Sliding window technique
  for (let end = 1; end < arr.length; end++) {
    // We gurantee that arr has len of atleast 2 elements.
    if (!distinctNums.has(arr[end])) {
      if (distinctNums.size === 2) {
        distinctNums.delete(arr[start]);
        start++;
      }
      if (arr[end] - arr[start] === 1 || arr[start] - arr[end] === 1) distinctNums.add(arr[end]);
      else {
        distinctNums.delete(arr[start]);
        start++;
        distinctNums.add(arr[start]);
      }
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

longestSubarray([1, 295331535]);
