#Section worked on by Nmesoma Aduruobi 20/CSC/032

# Stacks
# A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning that 
# the last element added to the stack will be the first one to be removed. Here's a basic implementation of a stack in Python:

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            return "Underflow"

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return "Stack is empty"

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Example usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

print("Stack elements:", stack.items)  # Output: [10, 20, 30]
print("Top element:", stack.peek())  # Output: 30
print("Popped element:", stack.pop())  # Output: 30
print("Stack elements after popping:", stack.items)  # Output: [10, 20]