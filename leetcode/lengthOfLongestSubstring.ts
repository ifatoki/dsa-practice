/**
  3. Longest Substring Without Repeating Characters
  
  Given a string s, find the length of the longest 
  substring
  without repeating characters.

  Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function lengthOfLongestSubstring(s: string): number {
  let max: number = 0;
  let used: Set<string> = new Set();
  let l: number = 0;

  for (let r: number = 0; r < s.length; r++) {
    while (used.has(s[r])) {
      used.delete(s[l]);
      l++;
    }
    used.add(s[r]);
    max = Math.max(r - l + 1, max);
  }

  return max;
};

// Time: O(n)
// Space: O(1)