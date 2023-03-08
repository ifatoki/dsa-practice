var maxSubArray = function (nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  
  for (let n = 0; n < nums.length; n++) {
    currentSum+=nums[n];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  
  return maxSum;
}

console.log(maxSubArray([-2, 1]))