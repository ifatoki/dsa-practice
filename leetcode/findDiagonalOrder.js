var findDiagonalOrder = function(mat) {
  const result = Array(mat.length * mat[0].length);
  let directionIsUp = true;
  let x = 0;
  let y = 0;
  let i = 0
  
  while (x >= 0 || y >= 0 || x < mat.length || y < mat[0].length) {
    if (x < mat.length && y < mat[0].length && x >= 0 && y >= 0) {
      result[i++] = mat[x][y];  
      
      const sumMatrix = directionIsUp ? [-1, 1] : [1, -1];
      x += sumMatrix[0];
      y += sumMatrix[1];
    } else if (x < 0 && y >= mat[0].length) {
      x += 2;
      y -= 1; 
      directionIsUp = !directionIsUp;
    } else if (y < 0 && x >= mat.length) {
      x -= 1;
      y += 2;
      directionIsUp = !directionIsUp;
    } else if (x < 0) {
      x += 1;
      directionIsUp = !directionIsUp;
    } else if (y < 0) {
      y += 1;
      directionIsUp = !directionIsUp;
    };    
  }
  
  return result;
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))