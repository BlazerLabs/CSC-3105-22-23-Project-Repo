class Array:
    def __init__(self):
        self.data = []

    def insert(self, item):
        self.data.append(item)

    def delete(self, item):
        self.data.remove(item)

    def search(self, item):
        return item in self.data


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, value):
        new_node = LinkedListNode(value)
        new_node.next = self.head
        self.head = new_node

    def delete(self, value):
        current = self.head
        previous = None
        while current:
            if current.value == value:
                if previous:
                    previous.next = current.next
                else:
                    self.head = current.next
                return
            previous = current
            current = current.next

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False


'''
Group 13

22/D/CSC/005
22/D/CSC/010 group leader.
22/D/CSC/006
'''
