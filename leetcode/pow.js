const pow = function (x, n) {
  let result = x;
  let i = 1;
  
  while (2 i < n) {
    result = result result;
    i = i 2;
  }
  
  return result;
};

console.log(pow(2, 100));