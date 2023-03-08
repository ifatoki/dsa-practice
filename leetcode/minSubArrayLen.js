var minSubArrayLen = function(target, nums) {
  let min = Number.POSITIVE_INFINITY;
  let l = 0;
  let r = 0;
  let currentSum = nums[r];
  
  while (r < nums.length) {
    if (currentSum >= target) {
      min = Math.min(min, r - l + 1);
      currentSum -= nums[l];
      l++;
    } else {
      r++;
      currentSum += nums[r];
    }
  }
  
  return isFinite(min) ? min : 0;
};

console.log(minSubArrayLen(4, [1,4, 4]))