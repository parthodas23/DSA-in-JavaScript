// const reverStr = (str) => {
//   let reversed = "";
//   for (let i = str.length-1; i>=0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };
// console.log(reverStr("Hello"));

// const palondrome = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return str === reversed;
// };

// console.log(palondrome("cddc"));

// const factorial = (n) => {
//   if (n <= 0) {
//     return;
//   }
//   console.log(n);
//   factorial(n - 1);
// };

// factorial(7);

// const fibionacci = (n) => {
//   let prev = 0;
//   let curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = curr + prev;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// };
// console.log(fibionacci(6));

// const isAnagram = (str1, str2) => {
//   str1 = str1.trim().toLowerCase();
//   str2 = str2.trim().toLowerCase();
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// };

// console.log(isAnagram("listen", "silent"));

// const vowelCount = (str) => {
//   const vowel = "aeiouAEIOU";
//   let count = 0;
//   if (str.length === 0) {
//     return null;
//   }
//   for (let char of str) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(vowelCount("Hello"));

// const countChar = (str) => {
//   if (str.length === 0) return "";
//   let compress = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compress += str[i] + count;
//       count = 1;
//     }
//   }

//   return compress;
// };

// console.log(countChar("abbccdd"));

// const arr = [1, 2, 3, 4, 4];
// let duplicate = new Set();
// let seen = new Set();

// for (let num of arr) {
//   if (seen.has(num)) {
//     duplicate.add(num);
//   } else {
//     seen.add(num);
//   }
// }
// console.log(...duplicate);

// const uniqueChar = (str) => {
//   let unique = "";
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === str[i + 1]) {
//       return;
//     } else {
//       unique = str[i];
//     }
//   }
//   return unique;
// };

// console.log(uniqueChar("swiss"));

// const unique = (str) => {
//   let freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (freq[char] === 1) {
//       return char;
//     }
//   }
// };
// console.log(unique("swiss"));

// const findMiss = (arr, n) => {
//   const expected = (n * (n + 1)) / 2;
//   const actual = arr.reduce((acc, num) => acc + num);
//   return expected - actual;
// };
// console.log(findMiss([1, 2, 4, 5], 5));

// const arr = [1, 2, 2, 3, 4, 4];
// const withoutDup = arr.reduce((acc, num) => {
//   if (!acc.includes(num)) acc.push(num);
//   return acc;
// }, []);
// console.log(withoutDup);

// const findMaxMIn = (arr) => {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return { min, max };
// };
// console.log(findMaxMIn([2, 23, 4, 56]));

// const rotateStr = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const combiend = str1 + str1;
//   return combiend.includes(str2);
// };
// console.log(rotateStr("abcd", "bcda"));

// const findIntersection = (arr1, arr2) => {
//   return arr1.filter((element) => arr2.includes(element));
// };

// console.log(findIntersection([1, 2, 3, 4], [2, 3, 4, 5]));

const mergedSort = (arr1, arr2) => {
  let j = 0;
  let i = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1[i]) {
    result.push(arr1[i]);
    i++;
  }

  if (j < arr2[j]) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
console.log(mergedSort([1, 3, 5], [2, 4, 6]));
