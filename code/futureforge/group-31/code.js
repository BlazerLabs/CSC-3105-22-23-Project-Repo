// Initializing an array
let array = [1, 2, 3, 4, 5];

// Accessing elements
console.log(array[0]); // Output: 1

// Modifying elements
array[2] = 10;
console.log(array); // Output: [1, 2, 10, 4, 5]

// Length of the array
console.log(array.length); // Output: 5

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

// Example usage
let linkedList = new LinkedList();
linkedList.insertAtBeginning(1);
linkedList.insertAtBeginning(2);
linkedList.insertAtBeginning(3);
linkedList.display(); // Output: 3 -> 2 -> 1
