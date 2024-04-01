// i worked on two data structures ie Array & linked List
// chukwuemeka chinecherem innocent  20/csc/028


// Array
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get element at index
    get(index) {
        return this.data[index];
    }

    // Add element at the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    // Remove last element
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Delete element at index
    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    // Helper method to shift items to the left
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

// ouput
const customArray = new CustomArray();
customArray.push(1);
customArray.push(2);
customArray.push(3);
console.log(customArray.get(1)); // Output: 2
console.log(customArray.pop()); // Output: 3
customArray.delete(0);
console.log(customArray); // Output: { length: 1, data: { '1': 2 } }




//Linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = { data: data, next: null };
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

    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

// output
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.remove(2); // Removes 2
console.log(linkedList);




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


  //Section worked on by Adikwu Mary 20/CSC/140

//   Trees 

//   A tree is a hierarchical data structure that consists of nodes connected by edges. 
//   Each node has a value and a list of references to its child nodes. 
//   The topmost node in the tree is called the root node. Trees are used to represent 
//   hierarchical relationships like family trees, organization charts, file systems, etc.


// Binary Tree implementation using classes

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform inorder traversal of the tree
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // Perform preorder traversal of the tree
    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Perform postorder traversal of the tree
    postorderTraversal(node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder traversal:");
tree.inorderTraversal(tree.root);

console.log("Preorder traversal:");
tree.preorderTraversal(tree.root);

console.log("Postorder traversal:");
tree.postorderTraversal(tree.root);


// Heaps
// A heap is a specialized tree-based data structure that satisfies the heap property. There are two types of heaps: max heap and min heap. 
// In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value 
// of each node is smaller than or equal to the values of its children.

// Max Heap implementation using classes

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get the parent index of a node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the left child index of a node
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the right child index of a node
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up the newly added element
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // Print the heap
    printHeap() {
        console.log(this.heap);
    }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(3);
maxHeap.insert(7);

maxHeap.printHeap(); // Output: [15, 7, 10, 3, 5]