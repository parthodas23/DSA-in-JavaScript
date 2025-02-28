class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head; // access next and value
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
console.log(myLinkedList);
