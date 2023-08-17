/**
  392. Is Subsequence
  
  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

  A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

  Example 1:
  Input: s = "abc", t = "ahbgdc"
  Output: true

  Example 2:
  Input: s = "axc", t = "ahbgdc"
  Output: false
 */
function isSubsequence(s: string, t: string): boolean {
  let index: number = 0; 

  for (let i: number = 0; i < s.length; i++) {
    const foundIndex: number = t.indexOf(s[i], index);

    if (foundIndex < 0) return false;
    index = foundIndex + 1;
  }

  return true;
};

// Time: O(t)
// Space: O(1)