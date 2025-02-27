// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// brute force
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1, 2, 3]));

// Using a Set (Efficient Approach)  --> total O(n)
// Set is a built-in JavaScript object that stores unique values only. This means if you try to add a duplicate value, it won’t be added again.

// As we iterate through nums, each number is added to numSet:
// Total space used = n elements → O(n) space complexity

const containDuplicates = (nums) => {
  let numSet = new Set();
  for (let num of nums) {
    // 1st --> numSet={} check 1 is here --> not --> add in set
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
};

console.log(containDuplicates([1, 2, 3, 1, 2, 3]));
