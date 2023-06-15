/**
  1351. Count Negative Numbers in a Sorted Matrix
  
  Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

  Example 1:
  Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
  Output: 8
  Explanation: There are 8 negatives number in the matrix.
 */


function countNegatives(grid: number[][]): number {
  let count: number = 0;
  let end: number = grid[0].length;

  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < end; j++) {
      if (grid[i][j] < 0) end = j;
    }
    count += (grid[i].length - end)
  }

  return count;
};

// Time: O(n * m)
// Space: O(1)