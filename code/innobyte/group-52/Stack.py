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
            
    def peek(self):
        """Return the item at the top of the stack without removing it."""
        if not self.is_empty():
            return self.items[-1]
        else:
            raise IndexError("peek from an empty stack")

    def size(self):
        """Return the number of items in the stack."""
        return len(self.items)

# Usage example:
if __name__ == "__main__":
    # Create a new stack
    stack = Stack()

    # Push some items onto the stack
    stack.push(1)
    stack.push(2)
    stack.push(3)

    # Peek at the top item of the stack
    print("Top of the stack:", stack.peek())

    # Pop items from the stack until it's empty
    while not stack.is_empty():
        print("Popped:", stack.pop())

    # Trying to pop from an empty stack should raise an IndexError
    # print(stack.pop())
