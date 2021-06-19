class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.previous = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAtHead(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  addAtTail(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  deleteHead() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
    this.head.previous = null;
  }

  deleteTail() {
    if (this.head === null) {
      return;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  displayLinkedList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
