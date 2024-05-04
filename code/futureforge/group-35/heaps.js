


// A binary heap is a binary tree-based data structure that satisfies the heap property. In a min-heap, for any given node i, 
// the value of i is less than or equal to the values of its children nodes. Heaps are commonly used for implementing priority queues.

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                // Swap parent and child
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return minValue;
    }

    heapify(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            // Swap index with smallestIndex
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            this.heapify(smallestIndex);
        }
    }
}

// Example usage of MinHeap
const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.heap);  // Output: [3, 8, 5, 10]

console.log(minHeap.extractMin());  // Output: 3
console.log(minHeap.heap);  // Output: [5, 8, 10]