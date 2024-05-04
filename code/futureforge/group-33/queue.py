#Section worked on by Nmesoma Aduruobi 20/CSC/032

# Queues
# A queue is a linear data structure that follows the First In, 
# First Out (FIFO) principle, meaning that the first element added to the queue will be the 
# first one to be removed. Here's a basic implementation of a queue in Python:

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return "Underflow"

    def front(self):
        if not self.is_empty():
            return self.items[0]
        else:
            return "Queue is empty"

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Example usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print("Queue elements:", queue.items)  # Output: [10, 20, 30]
print("Front element:", queue.front())  # Output: 10
print("Dequeued element:", queue.dequeue())  # Output: 10
print("Queue elements after dequeue:", queue.items)  # Output: [20, 30]