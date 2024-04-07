// All imports happens here
// Importing the MinHeap class
const MinHeap = require('./Heap');

const BinaryTree = require('./BinaryTreee')

//  her I Create a new instance of MinHeap
const minHeap = new MinHeap();

// and Insert some values into the heap
minHeap.insert(10);
minHeap.insert(4);
minHeap.insert(15);
minHeap.insert(20);

//I Print the min value
console.log("Min value:", minHeap.peek()); // Should print 4

// Extract the min value
console.log("Extracted min value:", minHeap.extractMin()); // Should print 4

// Print the remaining min value
console.log("Min value after extraction:", minHeap.peek()); // Should print 10



// Run my binary tree
// Example usage:
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(4);
binaryTree.insert(15);
binaryTree.insert(20);

console.log("Inorder traversal:");
binaryTree.inorderTraversal(binaryTree.root);
