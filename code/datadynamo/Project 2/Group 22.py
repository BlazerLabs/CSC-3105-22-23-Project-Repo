# DataStructuresExample.py

# Linked List
class ListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = ListNode(data)
        new_node.next = self.head
        self.head = new_node

# Array
my_array = [1, 2, 3, 4, 5]
print("Array elements:", my_array)

# Stack
my_stack = []
my_stack.append(10)  # Push an element onto the stack
popped_item = my_stack.pop()  # Pop the top element from the stack
print("Popped item:", popped_item)

# Queue
from queue import Queue

my_queue = Queue()
my_queue.put(10)
my_queue.put(20)
my_queue.put(30)

while not my_queue.empty():
    print("Dequeued item:", my_queue.get())

# Tree
class TreeNode:
    def __init__(self, key):
        self.key = key
        self.children = []

class Tree:
    def __init__(self, key):
        self.root = TreeNode(key)

my_tree = Tree('Root')
my_tree.root.children.append(TreeNode('Child1'))

# Graph
class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_edge(self, vertex1, vertex2):
        if vertex1 not in self.adj_list:
            self.adj_list[vertex1] = []
        self.adj_list[vertex1].append(vertex2)

my_graph = Graph()
my_graph.add_edge('A', 'B')
my_graph.add_edge('B', 'C')
