/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]

*/

var preorderTraversal = function (root) {
  if (!root) return [];
  let arrOfNodes = [];
  function preorderDFS(root, arrOfNodes) {
    arrOfNodes.push(root.val);
    if (root.left) preorderDFS(root.left, arrOfNodes);
    if (root.right) preorderDFS(root.right, arrOfNodes);
    return arrOfNodes;
  }
  return preorderDFS(root, arrOfNodes);
};
