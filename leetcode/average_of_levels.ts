/** 
  637. Average of Levels in Binary Tree
 
  Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
  
  Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [3.00000,14.50000,11.00000]
  Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
  Hence return [3, 14.5, 11].

  Example 2:
  Input: root = [3,9,20,15,7]
  Output: [3.00000,14.50000,11.00000]
*/
// Definition for a binary tree node.
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


function averageOfLevels(root: TreeNode | null): number[] {
  const levels: number[][] = [];
  const stack: Array<[TreeNode | null, number]> = [[root, 0]];

  while (stack.length) {
    const [node, level] = stack.pop();

    if (node) {
      if (levels.length === level) levels.push([]);
      levels[level].push(node.val);
      stack.push([node.right, level + 1], [node.left, level + 1]);
    }
  }

  return levels.map(level => (level.reduce((sum, num) => sum += num, 0) / level.length));
};