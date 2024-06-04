// An Implementation of the heap data structure by Odey John 20/CSC/211

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
      while (currentIndex > 0) {
        const parentIndex = this.getParentIndex(currentIndex);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    heapifyDown() {
      let currentIndex = 0;
      while (currentIndex < this.heap.length) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallerChildIndex = null;
  
        if (leftChildIndex < this.heap.length) {
          smallerChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (smallerChildIndex === null || this.heap[currentIndex] < this.heap[smallerChildIndex]) {
          break;
        }
  
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      }
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // Exporting the MinHeap class
  module.exports = MinHeap;
  