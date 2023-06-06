/**
  1456. Maximum Number of Vowels in a Substring of Given Length
  
  Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
    Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

  Example 1:
  Input: s = "abciiidef", k = 3
  Output: 3
  Explanation: 
    The substring "iii" contains 3 vowel letters.
 */

function maxVowels(s: string, k: number): number {
  const vowels: Set<String> = new Set('aeiou'.split(''));
  let maxCount: number = 0;
  let l: number = 0;
  let r: number = 0;

  while (r < k) {
    if (vowels.has(s[r++])) maxCount++;
  }
  let rangeCount: number = maxCount

  while (r < s.length) {
    if (vowels.has(s[l++])) rangeCount--;
    if (vowels.has(s[r++])) rangeCount++;
    maxCount = Math.max(maxCount, rangeCount);
  }

  return maxCount;
};

// Time: O(n)
// Space: O(1)