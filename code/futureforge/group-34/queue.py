#CEO's Work 20/CSC/119

# A queue is a linear data structure that follows the First In, First Out (FIFO) principle, 
# where elements are inserted at the rear (enqueue) and removed from the front (dequeue) of the queue. 
# It supports operations like enqueue (to insert an element into the queue) and dequeue (to remove and return the front element from the queue).


from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        """Inserts an element at the rear of the queue."""
        self.items.append(item)

    def dequeue(self):
        """Removes and returns the front element from the queue."""
        if not self.is_empty():
            return self.items.popleft()
        else:
            raise IndexError("dequeue from empty queue")

    def peek(self):
        """Returns the front element of the queue without removing it."""
        if not self.is_empty():
            return self.items[0]
        else:
            return None

    def is_empty(self):
        """Checks if the queue is empty."""
        return len(self.items) == 0

    def size(self):
        """Returns the number of elements in the queue."""
        return len(self.items)

# Example usage of Queue
queue = Queue()

queue.enqueue("apple")
queue.enqueue("banana")
queue.enqueue("cherry")

print("Queue size:", queue.size())  # Output: 3
print("Front element:", queue.peek())  # Output: apple

print(queue.dequeue())  # Output: apple
print(queue.dequeue())  # Output: banana
print(queue.is_empty())  # Output: False
print(queue.dequeue())  # Output: cherry
print(queue.is_empty())  # Output: True