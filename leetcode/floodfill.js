const floodFill = function(image, sr, sc, newColor) {
  const color = image[sr][sc];
  
  image[sr][sc] = 'p';
  for (let x = sr - 1; x < image.length; x += 2) {
    if (x >= 0 && image[x][sc] !== 'p') {
      floodFill(image, x, sc, newColor);
    }
  }
  
  for (let y = sc - 1; y < image[0].length; y += 2) {
    if (y >= 0 && image[sr][y] !== 'p') {
      floodFill(image, sr, y, newColor);
    }
  }
  
  return image;
};

console.log(floodFill(
  [[0,0,0],[0,1,1]],
1,
1,
1
  )
);