# Stack Data Structure task implementation in Python Programming language
# Author : Emediong Sunday
# Reg No: 20/CSC/033

#Stack class
class Stack:
    def __init__(self):
        """Initialize an empty stack."""
        self.items = []
        
def is_empty(self):
        """Check if the stack is empty."""
        return len(self.items) == 0

    def push(self, item):
        """Push an item onto the top of the stack."""
        self.items.append(item)

    def pop(self):
        """Remove and return the item at the top of the stack."""
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("pop from an empty stack")
