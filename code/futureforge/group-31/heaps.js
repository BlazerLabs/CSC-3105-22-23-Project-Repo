// CEO Work 20/CSC/119

// A heap is a specialized tree-based data structure that satisfies the heap property. In a heap, for a given node i, the value of its parent node is greater (or smaller) 
// than or equal to the value of i depending on whether it's a max heap or min heap. 
// Heaps are commonly used in priority queues and heap sort algorithms.


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
            let parentIndex = Math.floor((index - 1) / 2);
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

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify(0);
        }

        return min;
    }

    heapify(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }
}

// Example usage of MinHeap
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(3);

console.log("Min element:", minHeap.extractMin()); // Output: 3
console.log("Min element:", minHeap.extractMin()); // Output: 5