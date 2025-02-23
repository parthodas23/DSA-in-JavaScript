// const grocaries = ["potato", "mango", "suger", "eggs"];

// // O(n)
// const getGrocaries = (items, spacificItem) => {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === spacificItem) {
//       console.log("Found", items[i]);
//     }
//   }
// };

// getGrocaries(grocaries, "suger");

// const names = ["partha", "priti", "annie"];
// // find spacific arr --> O(1)
// const getName = (arr, index) => arr[index];
// console.log(getName(names, 1));

// const skills = ["node", "react", "express", "js"];
// // const number = [1, 2, 3, 4];

// // compare each skill with another
// // nested --> O(n^2)
// const getSkill = (all) => {
//   for (let i = 0; i < all.length; i++) {
//     for (let j = 0; j < all.length; j++) {
//       console.log(`Piar Skill ${all[i]} -- ${all[j]}`);
//     }
//   }
// };

// getSkill(skills);

// const revStr = (str) => str.split("").reverse().join("");
// console.log(revStr("Hello"));

const revStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(revStr("World"));
