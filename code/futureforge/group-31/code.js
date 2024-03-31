
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


//Section worked on by Jonathan Peace 20/CSC/124

// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, 
// meaning that the last element added to the stack will be the first one to be removed. 
// Think of it like a stack of plates where you can only remove the topmost plate.

// Stack implementation using classes

class Stack {
  constructor() {
      this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
      this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
      if (this.isEmpty())
          return "Underflow";
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

  // Print the elements of the stack
  printStack() {
      let stackString = '';
      for (let i = 0; i < this.items.length; i++) {
          stackString += this.items[i] + " ";
      }
      return stackString;
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements:", stack.printStack()); // Output: 10 20 30
console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack elements after popping:", stack.printStack()); // Output: 10 20


// Queues 
// A queue is another linear data structure that follows the First In, First Out (FIFO) principle, 
// meaning that the first element added to the queue will be the first one to be removed. 
// Think of it like a line of people waiting for a bus.

// Queue implementation using classes

class Queue {
  constructor() {
      this.items = [];
  }

  // Add element to the end of the queue
  enqueue(element) {
      this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
      if (this.isEmpty())
          return "Underflow";
      return this.items.shift();
  }

  // Return the front element of the queue without removing it
  front() {
      if (this.isEmpty())
          return "No elements in Queue";
      return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
      return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
      return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
      let queueString = '';
      for (let i = 0; i < this.items.length; i++) {
          queueString += this.items[i] + " ";
      }
      return queueString;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue elements:", queue.printQueue()); // Output: 10 20 30
console.log("Front element:", queue.front()); // Output: 10
console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue elements after dequeue:", queue.printQueue()); // Output: 20 30