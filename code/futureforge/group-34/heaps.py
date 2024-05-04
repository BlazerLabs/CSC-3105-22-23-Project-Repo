#CEO's Work 20/CSC/119

# A heap is a specialized binary tree-based data structure that satisfies the heap property. 
# In a min-heap, for any given node i, the value of i is less than or equal to the values of its children nodes. 
# Heaps are commonly used for implementing priority queues.

import heapq

class MinHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        """Inserts a value into the min-heap."""
        heapq.heappush(self.heap, value)

    def extract_min(self):
        """Removes and returns the minimum value from the min-heap."""
        if self.heap:
            return heapq.heappop(self.heap)
        else:
            raise IndexError("pop from empty heap")

# Example usage of MinHeap
min_heap = MinHeap()

min_heap.insert(5)
min_heap.insert(10)
min_heap.insert(3)
min_heap.insert(8)

print(min_heap.heap)  # Output: [3, 8, 5, 10]

print(min_heap.extract_min())  # Output: 3
print(min_heap.heap)  # Output: [5, 8, 10]