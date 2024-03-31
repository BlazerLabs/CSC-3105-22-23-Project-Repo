#Section worked on by Udeani Thankgod 20/CSC/124

# Arrays
# In Python, arrays are implemented using lists. Lists are dynamic arrays, 
# meaning they automatically resize themselves when needed. Here's a basic implementation of an array in Python:

class Array:
    def __init__(self):
        self.data = []

    def insert(self, value):
        self.data.append(value)

    def remove(self, value):
        self.data.remove(value)

    def search(self, value):
        return value in self.data

    def access(self, index):
        return self.data[index]

    def length(self):
        return len(self.data)

    def print_array(self):
        print(self.data)

# Example usage
arr = Array()
arr.insert(10)
arr.insert(20)
arr.insert(30)

arr.print_array()  # Output: [10, 20, 30]
print("Length:", arr.length())  # Output: 3
print("Search 20:", arr.search(20))  # Output: True
print("Access element at index 1:", arr.access(1))  # Output: 20
arr.remove(20)
arr.print_array()  # Output: [10, 30]




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


# Queues
# A queue is a linear data structure that follows the First In, 
# First Out (FIFO) principle, meaning that the first element added to the queue will be the 
# first one to be removed. Here's a basic implementation of a queue in Python:

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return "Underflow"

    def front(self):
        if not self.is_empty():
            return self.items[0]
        else:
            return "Queue is empty"

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Example usage
queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print("Queue elements:", queue.items)  # Output: [10, 20, 30]
print("Front element:", queue.front())  # Output: 10
print("Dequeued element:", queue.dequeue())  # Output: 10
print("Queue elements after dequeue:", queue.items)  # Output: [20, 30]


#Section worked on by Okoro Deborah 20/CSC/252

# Trees
# A tree is a hierarchical data structure consisting of nodes connected by edges. 
# Each node has a value and a list of references to its child nodes. 
# The topmost node in a tree is called the root node. Here's a basic implementation of a binary tree in Python:

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert_recursively(self.root, value)

    def _insert_recursively(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursively(node.left, value)
        elif value > node.value:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursively(node.right, value)

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.value, end=' ')
            self.inorder_traversal(node.right)

# Example usage
tree = BinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

tree.inorder_traversal(tree.root)  # Output: 3 5 7 10 15


# Heaps
# A heap is a binary tree that satisfies the heap property. 
# In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. 
# Here's a basic implementation of a max heap in Python:

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, index):
        parent_index = (index - 1) // 2
        if index > 0 and self.heap[index] > self.heap[parent_index]:
            self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
            self._heapify_up(parent_index)

    def print_heap(self):
        print(self.heap)

# Example usage
max_heap = MaxHeap()
max_heap.insert(10)
max_heap.insert(5)
max_heap.insert(15)
max_heap.insert(3)
max_heap.insert(7)

max_heap.print_heap()  # Output: [15, 7, 10, 3, 5]


#Section worked on by Ojobo Chiamaka Emilia 20/CSC/102

# Hash Tables
# A hash table is a data structure that implements an associative array abstract data type, 
# a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots 
# from which the desired value can be found. Here's a basic implementation of a hash table in Python:

class HashTable:
    def __init__(self):
        self.size = 10
        self.table = [[] for _ in range(self.size)]

    def _hash_function(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash_function(key)
        self.table[index].append((key, value))

    def search(self, key):
        index = self._hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self._hash_function(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return

# Example usage
hash_table = HashTable()
hash_table.insert("apple", 10)
hash_table.insert("banana", 20)
hash_table.insert("orange", 30)

print("Search for 'apple':", hash_table.search("apple"))  # Output: 10
print("Search for 'grape':", hash_table.search("grape"))  # Output: None

hash_table.remove("banana")
print("Search for 'banana':", hash_table.search("banana"))  # Output: None



# Graphs
# A graph is a collection of nodes (vertices) and edges that connect pairs of nodes. 
# Graphs can be directed (edges have direction) or undirected (edges have no direction). 
# Here's a basic implementation of an undirected graph using an adjacency list representation in Python:


class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []

    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.adjacency_list and vertex2 in self.adjacency_list:
            self.adjacency_list[vertex1].append(vertex2)
            self.adjacency_list[vertex2].append(vertex1)

    def remove_edge(self, vertex1, vertex2):
        if vertex1 in self.adjacency_list and vertex2 in self.adjacency_list:
            self.adjacency_list[vertex1].remove(vertex2)
            self.adjacency_list[vertex2].remove(vertex1)

    def remove_vertex(self, vertex):
        if vertex in self.adjacency_list:
            for adjacent_vertex in self.adjacency_list[vertex]:
                self.adjacency_list[adjacent_vertex].remove(vertex)
            del self.adjacency_list[vertex]

    def print_graph(self):
        for vertex in self.adjacency_list:
            print(vertex, "->", self.adjacency_list[vertex])

# Example usage
graph = Graph()
graph.add_vertex("A")
graph.add_vertex("B")
graph.add_vertex("C")
graph.add_vertex("D")

graph.add_edge("A", "B")
graph.add_edge("B", "C")
graph.add_edge("C", "D")
graph.add_edge("D", "A")

graph.print_graph()
# Output:
# A -> ['B', 'D']
# B -> ['A', 'C']
# C -> ['B', 'D']
# D -> ['C', 'A']

graph.remove_edge("A", "B")
graph.remove_vertex("C")

graph.print_graph()
# Output:
# A -> ['D']
# D -> ['A']

