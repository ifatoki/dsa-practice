/**
 643. Maximum Average Subarray I
 
  You are given an integer array nums consisting of n elements, and an integer k.
  Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

  Example 1:
  Input: nums = [1,12,-5,-6,50,3], k = 4
  Output: 12.75000
  Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

  Example 2:
  Input: nums = [5], k = 1
  Output: 5.00000
 */
function findMaxAverage(nums: number[], k: number): number {
  let r: number = 0;
  let max: number = Number.NEGATIVE_INFINITY;
  let sum: number = 0;

  for (let l: number = 0; l <= nums.length - k; l++) {
    for (r; r < l + k; r++) {
      sum += nums[r];
    }
    max = Math.max(sum, max);
    sum -= nums[l];
  }
  return parseFloat((max / k).toFixed(5));
};

// Time: O(n)
// Space: O(1)