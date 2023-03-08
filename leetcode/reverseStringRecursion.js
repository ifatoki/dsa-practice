var reverseString = function (str) {
  if (str.length <= 1) return str;
  if (str.length === 2) return `${str[str.length - 1]}${str[0]}`;

  const innerStr = reverseString(str.slice(1, str.length - 1))
  return `${str[str.length - 1]}${innerStr}${str[0]}`;
}

// Time O(n);
// Space O(n);

console.log(reverseString('it'));
