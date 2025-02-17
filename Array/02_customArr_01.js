class MyArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  deleteByIndex(index) {
    const first = this.data[index];

    // 1st delete by index
    delete this.data[index];

    // Shift all elements left by 1
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // delete repeted item
    delete this.data[this.length - 1];
    // maintain length
    this.length--;

    return first;
  }
}

const Arr = new MyArr();
// add something
Arr.push("fruit");
Arr.push("suger");
Arr.push("eggs");
Arr.push("mango");
Arr.push("orenge");

console.log(Arr);
console.log(Arr.deleteByIndex(2));
console.log(Arr);
