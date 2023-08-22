/**
  226. Invert Binary Tree
  
  Given the root of a binary tree, invert the tree, and return its root.

  Example 1:
  Input: root = [4,2,7,1,3,6,9]
  Output: [4,7,2,9,6,3,1]

  Example 2:
  Input: root = [2,1,3]
  Output: [2,3,1]

  Example 3:
  Input: root = []
  Output: []
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  return _invertTree(root);

  function _invertTree(node: TreeNode | null): TreeNode | null {
    if (!node) return null;
    const placeholder: TreeNode | null = node.left;

    node.left = _invertTree(node.right);
    node.right = _invertTree(placeholder);
    return node;
  }
};

// Time: O(n);
// Space: O(n);