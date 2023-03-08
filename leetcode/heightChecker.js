var heightChecker = function(heights) {
  const sortedHeights = [...heights];
  let slow = 0;
  let fast = heights.length - 1;
  
  while (slow < fast) {
    const slowVal = sortedHeights[slow];
    
    if (sortedHeights[slow] > sortedHeights[fast]) {
      sortedHeights[slow] = sortedHeights[fast];
      sortedHeights[fast--] = slowVal;
    } else {
      slow++;
      fast--;
    }
  }
  
  let count = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (sortedHeights[i] !== heights[i]) count++;
  }
  
  return count;
};

// console.log(heightChecker([2,1,2,1,1,2,2,1]))

console.log(heightChecker([1, 1, 4, 2, 1, 3]))