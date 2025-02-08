const numbers = [1, 2, 3, 4, 5];

// The example in the image describes a box of items where you know the location of each item.
// No matter how many items are inside, fetching an item always takes the same amount of time.
// This represents an O(1) operation, where the execution time does not depend on the input size.

// O(1)
const getElements = (arr, index) => arr[index];
console.log(getElements(numbers, 0));
