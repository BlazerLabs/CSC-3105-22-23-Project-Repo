#Section worked on by Enah Murphy 20/CSC/174 (Group Leader)

# LinkedList 
# A linked list is a linear data structure where elements are stored in nodes. 
# Each node contains data and a reference (or pointer) to the next node in the sequence, 
# forming a chain-like structure. Linked lists allow dynamic memory allocation and efficient insertion/deletion of elements.

class Node:
    def __init__(self, data):
        """Initialize a node with data and next pointer."""
        self.data = data
        self.next = None  # Initialize next pointer to None


class LinkedList:
    def __init__(self):
        """Initialize an empty linked list with a head node."""
        self.head = None  # Initialize head node to None

    def append(self, data):
        """Append a new node with data to the end of the linked list."""
        new_node = Node(data)  # Create a new node
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def display(self):
        """Display all nodes in the linked list."""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# Example usage of the LinkedList class
llist = LinkedList()  # Create an empty linked list
llist.append(10)  # Append node with data 10
llist.append(20)  # Append node with data 20
llist.append(30)  # Append node with data 30

print("Linked List:")
llist.display()  # Display the linked list