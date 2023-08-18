/**
  290. Word Pattern
  
  Given a pattern and a string s, find if s follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

  Example 1:
  Input: pattern = "abba", s = "dog cat cat dog"
  Output: true

  Example 2:
  Input: pattern = "abba", s = "dog cat cat fish"
  Output: false

  Example 3:
  Input: pattern = "aaaa", s = "dog cat cat dog"
  Output: false
 */
function wordPattern(pattern: string, s: string): boolean {
  const map = new Map();
  const uniqueWords = new Set();
  const words: string[] = s.split(' ');

  if (words.length !== pattern.length) return false;
  for (let i: number = 0; i < pattern.length; i++) {
    const word = map.get(pattern[i]);

    if (!word && !uniqueWords.has(words[i])) {
      map.set(pattern[i], words[i]); 
      uniqueWords.add(words[i])
    } else if (word !== words[i]) {
      return false;
    }
  }

  return true;
};

// Time: O(N + M) where N is lenght of pattern and M is number of words in s
// Space: O(W) where W is number of unique chars in pattern.