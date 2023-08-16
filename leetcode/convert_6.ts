/**
  6. Zigzag Conversion
  
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given a number of rows:
  string convert(string s, int numRows);

  Example 1:
  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"

  Example 2:
  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:
  P     I    N
  A   L S  I G
  Y A   H R
  P     I

  Example 3:
  Input: s = "A", numRows = 1
  Output: "A"
 */

function convert(s: string, numRows: number): string {
  let result: string = '';
  let firstCharInterval = 2 * numRows - 3;

  if (numRows === 1) return s;
  result += getStringOfCharsAtIntervals(0, firstCharInterval, firstCharInterval)
  let start = 1;
  let a: number = firstCharInterval - 2;
  let b: number = 1;

  while (a >= 1) {
    result += getStringOfCharsAtIntervals(start, a, b);
    a = a - 2;
    b = b + 2;
    start += 1;
  }

  result += getStringOfCharsAtIntervals(start, firstCharInterval, firstCharInterval)
  return result;
  
  function getStringOfCharsAtIntervals(start: number, x: number, y: number): string {
    let result: string = '';
    let i: number = start;
    let next: number = x;

    while (i < s.length) {
      result += s[i];
      i += (next + 1);
      next = next === x ? y : x
    }
    return result;
  }
};