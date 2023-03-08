var deleteAndEarn = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    if (Math.abs(nums[0] - nums[1]) === 1) {
      return Math.max(nums[0], nums[1]);
    } else {
      return nums[0] + nums[1];
    }
  }
  const uniqueNums = [...new Set(nums)];
  const maxs = []
  
  for (let i = 0; i < uniqueNums.length; i++) {
    const currentNum = uniqueNums[i];
    const remNums = nums.filter(x => currentNum + 1 !== x && currentNum - 1 !== x);
    
    const index = remNums.indexOf(currentNum);
    remNums.splice(index, index + 1)
    maxs.push(currentNum + deleteAndEarn(remNums));
  }
  return Math.max(...maxs)
};

console.log(deleteAndEarn([2,2,3,3,3,4]));
console.log(deleteAndEarn([3,4, 2]));