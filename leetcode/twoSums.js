const twoSums = (nums, target) => {
  const inverses = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const inverse = target - num;
    const inverseIndex = inverses.indexOf(num);

    if (inverseIndex >= 0) {
      return [inverseIndex, i];
    } else {
      inverses[i] = inverse;
    }
  }
}

// O(n) = n;

console.log(twoSums([3, 2, 4], 6))
