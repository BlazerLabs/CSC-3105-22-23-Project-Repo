# David's code 19/ARC/028T (Group Leader)

class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
        
# Joseph's code 20/CSC/116
class LinkedList:
    def _init_(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=' -> ')
            current = current.next
        print('None')


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
    # Test LinkedList
    print("Testing LinkedList:")
    ll = LinkedList()
    ll.append(1)
    ll.append(2)
    ll.append(3)
    ll.display()  # Output: 1 -> 2 -> 3 -> None

    # Test Queue
    print("\nTesting Queue:")
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print("Peek:", queue.peek())  # Output: 1
    print("Dequeue:", queue.dequeue())  # Output: 1
    print("Size:", queue.size())  # Output: 2

