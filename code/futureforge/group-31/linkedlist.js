// i worked on the first two Data structures (Array, Linked List)
// Name: Ebere Sunday Emmanuel
// Reg.No: 20/csc/160
// 2, linked list

// Node class to represent elements of the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert at the beginning
    insertAtBeginning(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Display the linked list
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }