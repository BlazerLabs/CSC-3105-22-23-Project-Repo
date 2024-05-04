//Section worked on by Edet Saviour Daniel 20/CSC/162


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


