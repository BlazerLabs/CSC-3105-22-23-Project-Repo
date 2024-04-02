class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek at the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
  }
}

// Code in Action:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack elements:", stack.printStack()); // Output: 1 2 3
console.log("Size of stack:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 3
console.log("Popped element:", stack.pop()); // Output: 3
console.log("Stack after pop:", stack.printStack()); // Output: 1 2
