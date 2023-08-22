// var kthGrammar = function(n, k) {
  
//   const next = (s, i) => {
//     let result = s;
    
//     for (let j = i - 1; j < s.length; j++) {
//       let char = s[j];
//       let newChar = '01';
      
//       if (char === '1') newChar = '10';
//       result = `${result}${newChar}`;
//     }
    
//     return result;
//   }
  
//   let str = '01';
//   let index = 2;
  
//   while (str.length <= k && index < n) {
//     str = next(str, index++);
//   }
  
//   return str[k - 1] || null
// };

var kthGrammar = function (n, k) {
  const map = {
    1: ['0', '1'],
  }
  let row = map[1][0];
  let m = 1;
  
  while (2 *m <= k) {
    m++;
    map[m] = [`${row}${map[m - 1][1]}`, `${map[m - 1][1]}${row}`];
  // console.log(map)
    row = map[m][0];
  }
  
  console.log(row.length, m);
  return row[k - 1];
}

console.log(kthGrammar(30,
  434991989));