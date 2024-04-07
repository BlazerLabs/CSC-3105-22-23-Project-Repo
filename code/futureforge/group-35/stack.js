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
