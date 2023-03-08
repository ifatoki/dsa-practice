var removeElement = function (nums, val) {
  let valCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      valCount++;
    } else {
      nums[i - valCount] = nums[i];
    }
  }
  
  return nums.length - valCount;
}

// Time: O(n)
// Space: O(1)

console.log(removeElement([3, 2, 2, 3], 3));