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