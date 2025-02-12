/*
Given the root of a binary tree and an integer limit, delete all insufficient nodes in the tree simultaneously, and return the root of the resulting binary tree.

A node is insufficient if every root to leaf path intersecting this node has a sum strictly less than limit.

A leaf is a node with no children.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  function dfs(root, sumVal, limit) {
    // Base Case:
    if (root.left === null && root.right === null)
      if (root.val + sumVal < limit)
        // Reaching a leaf.
        // meaning that the current path is smaller than the limit and we can delete the node.
        return false;
      else return true;
    // Recurence Relation
    sumVal += root.val; // if its not a leaf we sum up the path until we reach a leaf.
    let leftRes,
      rightRes = false; // initiate the left adn right path of the current subtree to be false (false means node is insufficient, true otherwise)
    if (root.left) leftRes = dfs(root.left, sumVal, limit); // keep going left (PostOrder traversal)
    if (root.right) rightRes = dfs(root.right, sumVal, limit); // go right (as PostOrder traversal is left->right->node)
    // both calls returns results of the path according to the order of the traversal - up until the base case.
    // we still need to tell the parent node what is the status of both of his children - if both returns false, the parent node can be deleted as well.
    if (!leftRes) root.left = null;
    if (!rightRes) root.right = null;
    return rightRes || leftRes; // Passing the result of both children to the parent.
  }
  //Summary:
  //In the base case we deal with leaf nodes.
  // after dealing with leaf nodes, we deal with nodes which are not leafs. (line 31, lines 38-39)
  // afterwards passing the status to the parent node

  let rootRes = dfs(root, 0, limit); // we pass 0 to the sumVal so the first node in the tree will be the initial value in the calculation of the paths.
  if (!rootRes) return null; // In case we need to delete the parent node as well.
  return root;
};
