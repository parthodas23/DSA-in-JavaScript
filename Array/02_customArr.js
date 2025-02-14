class MyArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const NewArray = new MyArray();
NewArray.push("apple");
NewArray.push("suger");
NewArray.push("item");
console.log(NewArray);
