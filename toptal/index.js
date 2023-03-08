const numberOfCarryOperations = (x, y) => {
  let carryCount = 0;
  let carry = 0;

  const a = x.toString()
  const b = y.toString();
  for (let i = 1; i <= Math.max(a.length, b.length); i++) {
    let num1  = 0;
    let num2 = 0;

    if (i <= a.length) num1 = +a[a.length - i];
    if (i <= b.length) num2 = +b[b.length - i];

    const sum = carry + num1 + num2;
    
    if (10 <= sum) {
      carryCount++;
      carry = 1;
    } else {
      carry = 0
    }
  }

  return carryCount;
}

console.log(numberOfCarryOperations(101, 809));
console.log(numberOfCarryOperations(123, 456)) // 0
console.log(numberOfCarryOperations(555, 555)) // 3
console.log(numberOfCarryOperations(900, 11)) // 0
console.log(numberOfCarryOperations(145, 55)) // 2
console.log(numberOfCarryOperations(0, 0)) // 0
console.log(numberOfCarryOperations(1, 99999)) // 5
console.log(numberOfCarryOperations(999045, 1055)) // 5
console.log(numberOfCarryOperations(101, 809)) // 1
console.log(numberOfCarryOperations(189, 209)) // 1