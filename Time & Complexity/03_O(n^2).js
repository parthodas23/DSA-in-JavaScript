const getPiars = (arr) => {
  // O(n^2)  --> nested loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair : ${arr[i]}, ${arr[j]}`);
    }
  }
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    console.log("--------------");
  }
  // If we combine all the "O" operations it becomes O(n^2 + n)

  // O(n^2) is a Dominant term

  // "n" is a Non-Dominant term

  // So we remove the "non-dominant" term and we're only left with O(n^2)

  // This way, we simplify our big O

  //  Given O(n² + n), we identify the dominant term.
  // O(n²) grows faster than O(n) as n increases.
  // Since Big-O notation focuses on the worst-case dominant growth, we drop   the lower-order term.

  // The final simplified time complexity is O(n²).
};
const numbers = [1, 2, 3, 4, 5];

getPiars(numbers);
