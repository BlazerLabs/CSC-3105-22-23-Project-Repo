
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


//Section worked on by Moses Amarachi 20/CSC/078

// Stacks
// A stack is a linear data structure that follows the Last In, 
// First Out (LIFO) principle, where elements are added and removed from the top of the stack.

class Stack {
  constructor() {
      this.items = []; // Initialize an empty array to store stack elements
  }

  // Push element onto the stack
  push(element) {
      this.items.push(element);
  }

  // Pop element from the top of the stack and return it
  pop() {
      if (this.isEmpty()) {
          return "Underflow - Stack is empty";
      }
      return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
      return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
      return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
      return this.items.length;
  }

  // Print all elements of the stack
  printStack() {
      let result = "";
      for (let i = 0; i < this.items.length; i++) {
          result += this.items[i] + " ";
      }
      console.log("Stack: " + result);
  }
}

// Example usage of the Stack class
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);


