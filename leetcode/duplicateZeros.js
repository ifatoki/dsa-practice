// Time: O(n);
// Space: 0(1);


var duplicateZeros = function (arr) {
  let ignoreLastItem = false;
  let dupCount = 0;
  let i = 0;

  while (i + dupCount < arr.length) {
    const isLastItem = i + dupCount === arr.length - 1;
    
    if (arr[i] === 0) {
      if (isLastItem) {
        ignoreLastItem = true;
      } else {
        dupCount++;
      }
    }
    i++;
  }

  let index = arr.length - 1;
  
  if (ignoreLastItem) arr[index--] = 0;

  while (dupCount > 0 && index >= 0) {
    arr[index] = arr[index - dupCount];
    if (arr[index--] === 0) {
      arr[index--] = 0;
      dupCount--;
    }
  }
}


// Time: O(n^2)
// Space: O(1)
// var duplicateZeros = function(arr) {
//   const insertAt = index => {
//     let temp;
//     let numToInsert = 0;
    
//     for (let j = index; j < arr.length; j++) {
//       temp = arr[j];
//       arr[j] = numToInsert;
//       numToInsert = temp;
//     }
//   }
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) insertAt(i++ + 1);
//   }
// };

console.log(duplicateZeros([9,9,9,4,8,0,0,3,7,2,0,0,0,0,9,1,0,0,1,1,0,5,6,3,1,6,0,0,2,3,4,7,0,3,9,3,6,5,8,9,1,1,3,2,0,0,7,3,3,0,5,7,0,8,1,9,6,3,0,8,8,8,8,0,0,5,0,0,0,3,7,7,7,7,5,1,0,0,8,0,0]));
// console.log(duplicateZeros([0,0,0,0,0,0,0]))