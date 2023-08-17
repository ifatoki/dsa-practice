/**
  383. Ransom Note
 
  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

  Example 1:
  Input: ransomNote = "a", magazine = "b"
  Output: false

  Example 2:
  Input: ransomNote = "aa", magazine = "ab"
  Output: false

  Example 3:
  Input: ransomNote = "aa", magazine = "aab"
  Output: true
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomeMap = new Map();
  const magazineMap = new Map();

  mapStringToMap(ransomNote, ransomeMap);
  mapStringToMap(magazine, magazineMap);
  const keys = [...ransomeMap.entries()]

  for (let i = 0; i < keys.length; i++) {
    const [key, value] = keys[i];
    const count = magazineMap.get(key) || 0;

    if (value > count) return false;
  }
  return true;

  function mapStringToMap(s: string, map): void {
    for (let i: number = 0; i < s.length; i++) {
      const count = map.get(s[i]) || 0;

      map.set(s[i], count + 1);
    }
  }
};

// Time: O(m)
// Space: O(1)