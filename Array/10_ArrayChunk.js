// slice -->

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1, 4)); // [20, 30, 40] (index 4 is excluded)
// console.log(arr.slice(2));    // [30, 40, 50] (extracts from index 2 to end)
// console.log(arr.slice());     // [10, 20, 30, 40, 50] (copy of the array)

// Step 2: First Iteration (index = 0)
// chunk = arr.slice(0, 3) → [1, 2, 3]
// console.log("-----------", chunk)
// ----------- [1, 2, 3]
// chunked.push([1, 2, 3]) → chunked = [[1, 2, 3]]
// Update index = 0 + 3 = 3

// Step 3: Second Iteration (index = 3)
// chunk = arr.slice(3, 6) → [4] (since only 4 is left)
// console.log("-----------", chunk)
// ----------- [4]
// chunked.push([4]) → chunked = [[1, 2, 3], [4]]
// Update index = 3 + 3 = 6 (which is greater than arr.length, so loop stops)

const arrayChunk = (arr, size) => {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    console.log("------", chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(arrayChunk([1, 2, 3, 4, 5], 1));
