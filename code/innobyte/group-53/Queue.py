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
