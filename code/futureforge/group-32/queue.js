 //Section worked on by Jonathan Peace 20/CSC/124

 
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
