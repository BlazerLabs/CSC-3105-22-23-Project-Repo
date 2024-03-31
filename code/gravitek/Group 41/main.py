# David's code 19/ARC/028T (Group Leader)

class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def size(self):
        return len(self.items)


# Test the implementations
if __name__ == "__main__":
    # Test Queue
    print("\nTesting Queue:")
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print("Peek:", queue.peek())  # Output: 1
    print("Dequeue:", queue.dequeue())  # Output: 1
    print("Size:", queue.size())  # Output: 2

