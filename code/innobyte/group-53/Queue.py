# Queue Data Structure task implementation in Python
# Author: Oko Emmanuel Adoshi
# Reg No: 20/CSC/106

class Queue:
    def __init__(self):
        """Initialize an empty queue."""
        self.items = []

    def is_empty(self):
        """Check if the queue is empty."""
        return len(self.items) == 0

    def enqueue(self, item):
        """Add an item to the rear of the queue."""
        self.items.append(item)

    def dequeue(self):
        """Remove and return the item at the front of the queue."""
        if not self.is_empty():
            return self.items.pop(0)
        else:
            raise IndexError("dequeue from an empty queue")
