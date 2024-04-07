#Section worked on by Udeani Thankgod 20/CSC/124

# Linked Lists
# A linked list is a linear data structure where elements are not stored in contiguous locations like arrays. 
# Instead, each element points to the next element in the sequence using pointers. Here's a basic implementation of a singly linked list in Python:

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_head(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def insert_at_tail(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    def remove(self, value):
        if not self.head:
            return
        if self.head.value == value:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.value == value:
                current.next = current.next.next
                return
            current = current.next

    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")

# Example usage
ll = LinkedList()
ll.insert_at_head(10)
ll.insert_at_tail(20)
ll.insert_at_tail(30)

ll.print_list()  # Output: 10 -> 20 -> 30 -> None
print("Search 20:", ll.search(20))  # Output: True
ll.remove(20)
ll.print_list()  # Output: 10 -> 30 -> None