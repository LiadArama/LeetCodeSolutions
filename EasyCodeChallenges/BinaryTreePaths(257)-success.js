/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]

Constraints:
The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100

*/

var binaryTreePaths = function (root) {
  if (!root) return [];
  let arrOfPaths = [];
  function preorderDFS(root, arrOfPaths, pathStr) {
    if (!root.left && !root.right) {
      pathStr += `${root.val}`;
      arrOfPaths.push(pathStr);
    } else pathStr += `${root.val}->`;
    if (root.left) preorderDFS(root.left, arrOfPaths, pathStr);
    if (root.right) preorderDFS(root.right, arrOfPaths, pathStr);
    return arrOfPaths;
  }
  return preorderDFS(root, arrOfPaths, "");
};
