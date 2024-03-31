//Section worked on by Irek Jenjoe Ben 20/CSC/066

// Arrays
// Arrays are a fundamental data structure used to store a collection of elements. 
// In JavaScript, arrays are dynamic and can hold elements of any type. 
// Each element in an array has a numeric index, starting from 0.

class Array {
    constructor() {
        this.data = [];
    }

    // Insert an element at the end of the array
    insert(item) {
        this.data.push(item);
    }

    // Remove an element from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data.splice(index, 1)[0];
    }

    // Access an element at a specific index
    access(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data[index];
    }

    // Update an element at a specific index
    update(index, newValue) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        this.data[index] = newValue;
    }

    // Get the current length of the array
    length() {
        return this.data.length;
    }

    // Print the array
    print() {
        console.log(this.data.join(', '));
    }
}

// Example usage
const array = new Array();
array.insert(10);
array.insert(20);
array.insert(30);

array.print(); // Output: 10, 20, 30
console.log("Access element at index 1:", array.access(1)); // Output: 20
array.update(1, 50);
array.print(); // Output: 10, 50, 30
console.log("Remove element at index 0:", array.removeAt(0)); // Output: 10
array.print(); // Output: 50, 30



// Linked Lists
// A linked list is a linear data structure consisting of nodes where each node contains a value and a 
// reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not have indices 
// and elements are not stored in contiguous memory locations.


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning of the linked list
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert a new node at the end of the linked list
    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Remove the first occurrence of a value from the linked list
    remove(value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.value === value) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    // Print the linked list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.insertAtHead(10);
linkedList.insertAtHead(20);
linkedList.insertAtTail(30);

linkedList.print(); // Output: 20 -> 10 -> 30
linkedList.remove(10);
linkedList.print(); // Output: 20 -> 30



//Section worked on by Edet Saviour Daniel 20/CSC/162

// Stacks
// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
// This means that the last element added to the stack will be the first one to be removed. 
// Think of it like a stack of plates where you can only remove the topmost plate.

class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push operation: Add element to the top of the stack
    push(element) {
        this.items.push(element); // Add element to the end of the array
    }

    // Pop operation: Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Check if stack is empty
        }
        return this.items.pop(); // Remove and return last element of array
    }

    // Peek operation: Return the top element of the stack without removing it
    peek() {
        return this.items[this.items.length - 1]; // Return last element of array
    }

    // isEmpty operation: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0; // Check if array is empty
    }

    // size operation: Return the size of the stack
    size() {
        return this.items.length; // Return length of array
    }

    // Print the elements of the stack
    printStack() {
        console.log(this.items.join(', ')); // Print array elements separated by comma
    }
}

// Example usage
const stack = new Stack(); // Create instance of Stack class
stack.push(10); // Push elements
stack.push(20);
stack.push(30);

stack.printStack(); // Output: 10, 20, 30
console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
stack.printStack(); // Output: 10, 20



// Queues
// A queue is a linear data structure that follows the First In, 
// First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. 
// Think of it like a line of people waiting for a bus.

class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Enqueue operation: Add element to the end of the queue
    enqueue(element) {
        this.items.push(element); // Add element to the end of the array
    }

    // Dequeue operation: Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // Check if queue is empty
        }
        return this.items.shift(); // Remove and return first element of array
    }

    // Front operation: Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; // Check if queue is empty
        }
        return this.items[0]; // Return first element of array
    }

    // isEmpty operation: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0; // Check if array is empty
    }

    // size operation: Return the size of the queue
    size() {
        return this.items.length; // Return length of array
    }

    // Print the elements of the queue
    printQueue() {
        console.log(this.items.join(', ')); // Print array elements separated by comma
    }
}

// Example usage
const queue = new Queue(); // Create instance of Queue class
queue.enqueue(10); // Enqueue elements
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue(); // Output: 10, 20, 30
console.log("Front element:", queue.front()); // Output: 10
console.log("Dequeued element:", queue.dequeue()); // Output: 10
queue.printQueue(); // Output: 20, 30





