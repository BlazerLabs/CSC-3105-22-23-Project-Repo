class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if self.is_empty():
            return None
        return self.queue.pop(0)

    def is_empty(self):
        return len(self.queue) == 0

    def peek(self):
        if self.is_empty():
            return None
        return self.queue[0]

    def size(self):
        return len(self.queue)

    def display(self):
        print("Queue:", self.queue)
