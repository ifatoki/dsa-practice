var maxAreaOfIsland = function(grid) {
  let maxSize = 0;
  const survey = (x, y, result = { size: 0 }) => {
    result.size += 1;
    grid[x][y] = 0;
    
    if (x > 0 && grid[x - 1][y] === 1) survey(x - 1, y, result);
    if (x < grid.length - 1 && grid[x + 1][y] === 1) survey(x + 1, y, result);
    if (y > 0 && grid[x][y - 1] === 1) survey(x, y - 1, result);
    if (y < grid[0].length - 1 && grid[x][y + 1] === 1) survey(x, y + 1, result)
    
    return result;
  } 
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const { size } = survey(i, j);
        
        maxSize = Math.max(size, maxSize);
      }
    }
  }
  
  return maxSize;
};

console.log(maxAreaOfIsland([[1, 1]]))