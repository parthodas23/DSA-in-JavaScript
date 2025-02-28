class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head; // accesss next and head
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop(value) {
    let temp = this.head;
    let prev = this.head;

    if (!this.head) {
      return undefined;
    }

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.pop();
console.log(myLinkedList);
