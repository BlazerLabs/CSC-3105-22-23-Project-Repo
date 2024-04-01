#heap data structure code task
#author: Dennis Udie
#RegNo: 20/csc/130
class MinHeap:
    def __init__(self):
        # Initialize an empty list to store heap elements
        self.heap = []

    def parent(self, i):
        # Get the index of the parent of the element at index i
        return (i - 1) // 2

    def left(self, i):
        # Get the index of the left child of the element at index i
        return 2 * i + 1

    def right(self, i):
        # Get the index of the right child of the element at index i
        return 2 * i + 2

    def insert(self, value):
        # Add a new value to the heap
        self.heap.append(value)
        index = len(self.heap) - 1
        # Maintain heap property by swapping with parent if necessary
        while index > 0 and self.heap[self.parent(index)] > self.heap[index]:
            self.heap[self.parent(index)], self.heap[index] = self.heap[index], self.heap[self.parent(index)]
            index = self.parent(index)

    def heapify(self, i):
        # Heapify subtree rooted at index i, assuming its left and right subtrees are already heapified
        smallest = i
        left = self.left(i)
        right = self.right(i)
        # Find the smallest element among the node and its left and right children
        if left < len(self.heap) and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < len(self.heap) and self.heap[right] < self.heap[smallest]:
            smallest = right
        # If the smallest element is not the root, swap it with the root and continue heapifying
        if smallest != i:
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            self.heapify(smallest)

    def extractMin(self):
        # Extract the minimum element from the heap
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        # Replace the root with the last element and heapify the root
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify(0)
        return root
