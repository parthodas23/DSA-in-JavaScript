// const intRev = (n) => {
//   const reversed = n.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(n);
// };
// console.log(intRev(-123));

const reverseInt = (int) => {
  const isNegative = int < 0;
  let n = Math.abs(int);
  const maxInt = Math.pow(2, 31) - 1; //Math.pow(2, 31) - 1 calculates 2^31 - 1, which is 2147483647 (the maximum value for a 32-bit signed integer).
  let reversed = 0;
  while (n !== 0) {
    let last = n % 10; // 1234 % 10= 4
    reversed = reversed * 10 + last; //0 * 10 +4 = 4
    n = Math.floor(n / 10); //Math.floor(1234/10)=123
  }

  if (reversed > maxInt) return 0;
  return isNegative ? -reversed : reversed; //The zeros are lost because JavaScript treats 0021 as simply 21
};

// Loop runs once per digit → If n has d digits, the loop runs O(d).
// ✅ d is approximately log n → So, time complexity is O(log n).
// ✅ This is efficient → Even for large numbers, the function runs quickly. 

console.log(reverseInt(-120));
