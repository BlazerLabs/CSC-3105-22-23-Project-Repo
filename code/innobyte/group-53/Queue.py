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
    
    def peek(self):
        """Return the item at the front of the queue without removing it."""
        if not self.is_empty():
            return self.items[0]
        else:
            raise IndexError("peek from an empty queue")

    def size(self):
        """Return the number of items in the queue."""
        return len(self.items)

# A sample code to test the data strucuture above:
if __name__ == "__main__":
    # Create a new queue
    queue = Queue()

    # Enqueue some items
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    # Peek at the front item of the queue
    print("Front of the queue:", queue.peek())

    # Dequeue items from the queue until it's empty
    while not queue.is_empty():
        print("Dequeued:", queue.dequeue())

    # Trying to dequeue from an empty queue should raise an IndexError
    # print(queue.dequeue())
