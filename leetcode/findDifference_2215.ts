/**
  2215. Find the Difference of Two Arrays

  Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
    - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
  Note that the integers in the lists may be returned in any order.

  Example 1:
  Input: nums1 = [1,2,3], nums2 = [2,4,6]
  Output: [[1,3],[4,6]]
  Explanation:
    For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
    For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,
*/

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1: Set<number> = new Set(nums1);
  const set2: Set<number> = new Set(nums2);

  let minSet: Set<number> = set1;

  if (set2.size < set1.size) minSet = set2;
  const nums: number[]  = [...minSet];

  for (let i: number = 0; i < nums.length; i++) {
    if (set1.has(nums[i]) && set2.has(nums[i])) {
      set1.delete(nums[i]);
      set2.delete(nums[i]);
    }
  }

  return [[...set1], [...set2]];
};

// Time: O(n + m))
// Space: O(n + m)