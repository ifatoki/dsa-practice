var findMaxConsecutiveOnes = function(nums) {
  let nextZero = null;
  let fast = 0;
  let start = -1;
  let max = 0;
  
  while (fast < nums.length) {
    const val = nums[fast];
    
    if (fast === nums.length - 1) {
      max = Math.max(max, fast - start + 1)
    } else if (val === 0) {
      max = Math.max(max, fast - start);
      if (nextZero !== null) {
        start = nextZero + 1;
      }
      nextZero = fast;
    }
    fast++;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1]))