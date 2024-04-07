// All imports happens here
// Importing the MinHeap class
const MinHeap = require('./MinHeap');

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
