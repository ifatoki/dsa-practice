/**
  744. Find Smallest Letter Greater Than Target
  
  You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
  Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

  Example 1:
  Input: letters = ["c","f","j"], target = "a"
  Output: "c"
  Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

  Example 2:
  Input: letters = ["c","f","j"], target = "c"
  Output: "f"
  Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

  Example 3:
  Input: letters = ["x","x","y","y"], target = "z"
  Output: "x"
  Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 */
function nextGreatestLetter(letters: string[], target: string): string {
  let l: number = 0;
  let r: number = letters.length; 

  while (l < r) {
    const mid: number = l + Math.floor((r - l) / 2) 

    if (letters[mid].charCodeAt(0) <= target.charCodeAt(0)) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  if (l === letters.length) return letters[0];
  return letters[l]; 
};

// Time: O(log(n))
// Space: O(1)