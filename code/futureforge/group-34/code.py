#Section worked on by Enah Murphy 20/CSC/174 (Group Leader)

#Array
# An array is a linear data structure consisting of a collection of elements, each identified by at least one index or key. 
# The elements of an array are stored in contiguous memory locations, allowing efficient random access based on index.

class Array:
    def __init__(self, size):
        """Initialize an array with a given size."""
        self.size = size
        self.array = [None] * size  # Create a list initialized with None values

    def get(self, index):
        """Get the element at a specific index in the array."""
        if 0 <= index < self.size:
            return self.array[index]
        else:
            raise IndexError("Index out of bounds")

    def set(self, index, value):
        """Set the value at a specific index in the array."""
        if 0 <= index < self.size:
            self.array[index] = value
        else:
            raise IndexError("Index out of bounds")

    def __str__(self):
        """Return a string representation of the array."""
        return str(self.array)


# Example usage of the Array class
arr = Array(5)  # Create an array of size 5
print("Initial Array:", arr)

arr.set(0, 10)  # Set value 10 at index 0
arr.set(1, 20)  # Set value 20 at index 1
arr.set(2, 30)  # Set value 30 at index 2

print("Array after setting values:", arr)

print("Value at index 1:", arr.get(1))  # Get value at index 1


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