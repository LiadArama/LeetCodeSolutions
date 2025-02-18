/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false
*/

var isSameTree = function (p, q) {
  if (!q && !p) return true; // both are at the same level and there is no node in this level.
  if (!q || !p) return false; // since the first condition isnt true, it may be that one of them is null and the other is not - meaning they have different heights
  return (
    q.val === p.val && // compare current node value.
    isSameTree(p.left, q.left) && // keep going left - checking left subtree.
    isSameTree(p.right, q.right) // keep going right - checking right subtree.
  );
};
