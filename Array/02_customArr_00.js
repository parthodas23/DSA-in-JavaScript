// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.

// class className {
//   constructor() {}
//   method1() {}
//   method2() {}
//   method() {}
// }

// class MyArray {
//   constructor() {
//     (this.length = 0), (this.data = {});
//   }
//   add(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.data;
//   }
// }

// const NewArray = new MyArray();
// NewArray.add("apple");
// NewArray.add("suger");
// NewArray.add("item");
// console.log(NewArray);

class MyArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  //
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // get data
  get(index) {
    return this.data[index];
  }

  // delete last element
  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return console.log(last);
  }

  shift() {
    const first = this.data[0];

    // Shift all elements left by 1
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last item to maintain correct length
    delete this.data[this.length - 1];

    this.length--; // Reduce length
    return first;
  }
}

const newArr = new MyArray();
// add something
newArr.push("suger");
newArr.push("fruit");
newArr.push("eggs");

// get
// console.log(newArr.get(0));

// delete last element
// newArr.pop();

// delete first and change index

    // why delete last
      // const arr = new MyArray();
      // arr.push("sugar");
      // arr.push("fruit");
      // arr.push("eggs");

      // console.log(arr);
      // // { 0: "sugar", 1: "fruit", 2: "eggs", length: 3 }

      // arr.shift(); // Removes "sugar"

      // console.log(arr);
      // // Expected: { 0: "fruit", 1: "eggs", length: 2 }
      // // Actual (without delete): { 0: "fruit", 1: "eggs", 2: "eggs", length: 2 }

console.log(newArr);
console.log(newArr.shift());
console.log(newArr);