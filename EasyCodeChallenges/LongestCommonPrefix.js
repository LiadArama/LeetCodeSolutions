"use strict";
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

*) 1 <= strs.length <= 200
*) 0 <= strs[i].length <= 200
*) strs[i] consists of only lowercase English letters.
*/

const arrOfStrings = ["flower", "flow", "flight"];

const shortestWord = arrOfStrings.reduce((a, b) =>
  a.length < b.length ? a : b
);

let longestCommonPrefixWord = "";
let currCharEqual = true;
for (let i = 0; i < shortestWord.length; i++) {
  arrOfStrings.forEach((currWord) => {
    if (currWord === shortestWord) return;
    if (currWord[i] !== shortestWord[i]) currCharEqual = false;
  });
  if (currCharEqual) longestCommonPrefixWord += shortestWord[i];
}
return longestCommonPrefixWord;
console.log(longestCommonPrefixWord);
