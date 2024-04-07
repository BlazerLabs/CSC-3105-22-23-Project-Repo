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
  
  console.log("Stack size:", stack.size()); // Output: 3
  console.log("Top element:", stack.peek()); // Output: 30
  stack.printStack(); // Output: Stack: 10 20 30
  console.log("Popped element:", stack.pop()); // Output: 30
  stack.printStack(); // Output: Stack: 10 20