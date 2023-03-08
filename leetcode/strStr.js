var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length && i + j <= haystack.length; j++) {
      if (haystack[i + j] !== needle[j]) break
      if (j + 1 === needle.length) return i
    }
  }
  
  return -1;
};

console.log(strStr("aabaaabaaac", "aabaaac"));