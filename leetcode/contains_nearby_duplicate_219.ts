/**
  219. Contains Duplicate II
  
  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
  
  Example 1:
  Input: nums = [1,2,3,1], k = 3
  Output: true

  Example 2:
  Input: nums = [1,0,1,1], k = 1
  Output: true

  Example 3:
  Input: nums = [1,2,3,1,2,3], k = 2
  Output: false
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const freqMap = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    let prev = freqMap.get(nums[i]);

    if (prev === null) {
      freqMap.set(nums[i], i);
    } else if (Math.abs(prev - i) <= k) {
      return true;
    } else {
      freqMap.set(nums[i], i)
    }
  }

  return false;
};

// Time: O(n)
// Space: O(n)