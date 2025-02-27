const groupAnagram = (strs) => {
  let a;
  let b;
  for (let i = 0; i < strs.length - 1; i++) {
    strs.map((str) => {
      str.split("").sort().join("") === strs[i].split("").sort().join("");
      a = [str, strs[i]];
    });
  }
  return [a];
};
console.log(groupAnagram(["eat", "tea", "bat"]));

// for (let j = i + 1; j < strs.length; j++) {
//   if (
//     strs[i].split("").sort().join("") !== strs[j].split("").sort().join("")
//   ) {
//     b = [strs[i]];
//   }
// }
// if (
//   strs[i].split("").sort().join("") ===
//   strs[i + 1].split("").sort().join("")
// ) {
//   a = [strs[i], strs[i + 1]];
// }
