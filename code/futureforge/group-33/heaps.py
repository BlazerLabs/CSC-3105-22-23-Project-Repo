#Section worked on by Okoro Deborah 20/CSC/252

# Heaps
# A heap is a binary tree that satisfies the heap property. 
# In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. 
# Here's a basic implementation of a max heap in Python:

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, index):
        parent_index = (index - 1) // 2
        if index > 0 and self.heap[index] > self.heap[parent_index]:
            self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
            self._heapify_up(parent_index)

    def print_heap(self):
        print(self.heap)

# Example usage
max_heap = MaxHeap()
max_heap.insert(10)
max_heap.insert(5)
max_heap.insert(15)
max_heap.insert(3)
max_heap.insert(7)

max_heap.print_heap()  # Output: [15, 7, 10, 3, 5]
