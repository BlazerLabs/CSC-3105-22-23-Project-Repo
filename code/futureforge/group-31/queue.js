//Section worked on by Moses Amarachi 20/CSC/078

// Queue
// A queue is a linear data structure that follows the First In, First Out (FIFO) principle, 
// where elements are added to the rear (enqueue) and removed from the front (dequeue) of the queue.

class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store queue elements
    }
  
    // Add element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }
  
    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow - Queue is empty";
        }
        return this.items.shift();
    }
  
    // Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
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
  
    // Print all elements of the queue
    printQueue() {
        let result = "";
        for (let i = 0; i < this.items.length; i++) {
            result += this.items[i] + " ";
        }
        console.log("Queue: " + result);
    }
  }
  
  // Example usage of the Queue class
  let queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log("Queue size:", queue.size()); // Output: 3
  console.log("Front element:", queue.front()); // Output: 10
  queue.printQueue(); // Output: Queue: 10 20 30
  console.log("Dequeued element:", queue.dequeue()); // Output: 10
  queue.printQueue(); // Output: Queue: 20 30
  
  
  
  