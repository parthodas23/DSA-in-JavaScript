const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) { // o(n) time
    if (i % 3 === 0 && i % 5 === 0) {  // O(1) time
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(15);
