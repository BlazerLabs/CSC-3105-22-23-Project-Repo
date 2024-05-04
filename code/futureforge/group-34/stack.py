#CEO's Work 20/CSC/119

# A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements are inserted and removed from the top of the stack. 
# It supports two main operations: push (to insert an element onto the stack) and pop (to remove the top element from the stack).

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        """Inserts an element onto the top of the stack."""
        self.items.append(item)

    def pop(self):
        """Removes and returns the top element from the stack."""
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("pop from empty stack")

    def peek(self):
        """Returns the top element of the stack without removing it."""
        if not self.is_empty():
            return self.items[-1]
        else:
            return None

    def is_empty(self):
        """Checks if the stack is empty."""
        return len(self.items) == 0

    def size(self):
        """Returns the number of elements in the stack."""
        return len(self.items)

# Example usage of Stack
stack = Stack()

stack.push(10)
stack.push(20)
stack.push(30)

print("Stack size:", stack.size())  # Output: 3
print("Top element:", stack.peek())  # Output: 30

print(stack.pop())  # Output: 30
print(stack.pop())  # Output: 20
print(stack.is_empty())  # Output: False
print(stack.pop())  # Output: 10
print(stack.is_empty())  # Output: True