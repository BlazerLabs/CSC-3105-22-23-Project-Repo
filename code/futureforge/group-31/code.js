
// i worked on the first two Data structures (Array, Linked List)
// Name: Ebere Sunday Emmanuel
// Reg.No: 20/csc/160

//Start

// 1, Array

class MyArray {
  constructor() {
    this.data = [];
  }

  insert(item) {
    this.data.push(item);
  }

  
}

// Example 
let myArray = new MyArray();
myArray.insert(1);
myArray.insert(2);
myArray.insert(3);
myArray.insert(4);
console.log(myArray.data); // Output: [1, 2, 3, 4]


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

// Example 
let linkedList = new LinkedList();
linkedList.insertAtBeginning(1);
linkedList.insertAtBeginning(2);
linkedList.insertAtBeginning(3);
linkedList.display(); // Output: 3 -> 2 -> 1

//End of my section
