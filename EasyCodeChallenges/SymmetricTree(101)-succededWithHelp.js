/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
*/
var isSymmetric = function (root) {
  function dfsMirrorPreorder(nodeLeft, nodeRight) {
    if (!nodeLeft && !nodeRight) return true;
    if (!nodeLeft || !nodeRight) return false;
    return (
      nodeLeft.val === nodeRight.val &&
      dfsMirrorPreorder(nodeLeft.left, nodeRight.right) &&
      dfsMirrorPreorder(nodeLeft.right, nodeRight.left)
    );
  }
  if (!root) return true;
  return dfsMirrorPreorder(root.left, root.right);
};
