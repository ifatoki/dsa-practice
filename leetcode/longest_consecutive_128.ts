/**
  128. Longest Consecutive Sequence

  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
  You must write an algorithm that runs in O(n) time.

  Example 1:
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */
function longestConsecutive(nums: number[]): number {
  const hash = new Set<number>();
  let longestStreak: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    hash.add(nums[i]);
  }

  for (let i: number = 0; i < nums.length; i++) {
    if (!hash.has(nums[i] - 1)) {
      let currentStreak: number = 1;
      let currentNum: number = nums[i];

      while (hash.has(currentNum + 1)) {
        currentStreak += 1;
        currentNum += 1;
      }

      longestStreak = Math.max(currentStreak, longestStreak);
    }
  }

  return longestStreak;
};

// Time: O(n)
// Space: O(n)