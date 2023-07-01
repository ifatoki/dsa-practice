/**
  530. Minimum Absolute Difference in BST
 
  Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

  Example 1:
  Input: root = [4,2,6,1,3]
  Output: 1
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

function getMinimumDifference(root: TreeNode | null): number {
  const nums = parseTree(root);
  let min = Math.abs(nums[1] - nums[0]);

  for (let i: number = 2; i < nums.length; i++) {
    min = Math.min(min, Math.abs(nums[i] - nums[i - 1]));
  }
  return min;

  function parseTree(node: TreeNode | null): number[] {
    if (!node) return [];
    const subLeft: number[] = parseTree(node.left);
    const subRight: number[] = parseTree(node.right);

    return [...subLeft, node.val, ...subRight];
  }
};

// Time: O(n);
// Space: O(n);