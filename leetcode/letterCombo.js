var letterCombinations = function(digits) {
  const combine = (strs, chars) => {
    if (strs.length === 0) return chars;
    if (strs.length === 1) return chars.map(char => `${strs[0]}${char}`);
    let strArr = [];
    
    for (let i = 0; i < strs.length; i++) {
      strArr = [...strArr, ...combine([strs[i]], chars)];
    }
    return strArr;
  }
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  let result = [];
  
  for (let i = 0; i < digits.length; i++) {
    const char = digits[i];
    const str = map[char];
    
    result = combine(result, str.split(''));
  }
  
  return result;
};

console.log(letterCombinations('234'));