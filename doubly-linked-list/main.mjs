// simple implementation of a doubly linked list in javaScript

import LinkedList from './linked-list.mjs';

let myList = new LinkedList();

console.log("\nadd 2 nodes at head: ");
myList.addAtHead(10);
myList.addAtHead(53);
myList.displayLinkedList();

console.log("\nadd 2 nodes at tail: ");
myList.addAtHead(84);
myList.addAtTail(23);
myList.displayLinkedList();

console.log("\ndelete head: ");
myList.deleteHead();
myList.displayLinkedList();

console.log("\ndelete tail: ");
myList.deleteTail();
myList.displayLinkedList();

