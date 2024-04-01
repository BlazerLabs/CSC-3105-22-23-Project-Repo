
class LinkedList:
    def __init__(self):
        self.head = None  # Reference to the head of the linked list

    # Node class to represent individual nodes
    class Node:
        def __init__(self, data):
            self.data = data  # Data stored in the node
            self.next = None  # Reference to the next node

    # Insert a new node at the end of the linked list
    def insert(self, data):
        new_node = self.Node(data)  # Create a new node with the given data
        if not self.head:
            # If the linked list is empty, set the new node as the head
            self.head = new_node
        else:
            # Traverse to the last node and append the new node
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
