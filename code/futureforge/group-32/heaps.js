  //Section worked on by Adikwu Mary 20/CSC/140


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