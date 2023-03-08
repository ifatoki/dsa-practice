var longestCommonPrefix = function(strs) {
  let commonPre = '';
  
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0].length === 0) return '';
    
    const char = strs[0][i];
    let common = true;
    
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].length === 0) return ''
      if (strs[j][i] !== char) {
        common = false;
        break;
      }
    }
    
    if (!common) break;
    commonPre = `${commonPre}${char}`;
  }
  
  return commonPre;
};

console.log(longestCommonPrefix(['']));