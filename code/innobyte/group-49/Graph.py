# Graph data structure tasks, Group 49
# Author: Elijah Louis John
# Reg No: 20/CSC/046
class GraphDS:
    def __init__(self):
        # Initialize an empty dictionary to store adjacency lists for each vertex
        self.adjacencyList = {}

    def addVertex(self, vertex):
        # Add a new vertex to the graph with an empty adjacency list
        self.adjacencyList[vertex] = []

    def addEdge(self, vertex1, vertex2):
        # Add vertex2 to the adjacency list of vertex1 and vice versa
        self.adjacencyList[vertex1].append(vertex2)
        self.adjacencyList[vertex2].append(vertex1)

    def hasEdge(self, vertex1, vertex2):
        # Check if vertex2 is in the adjacency list of vertex1
        return vertex2 in self.adjacencyList[vertex1]

    def getNeighbors(self, vertex):
        # Return the adjacency list of the given vertex
        return self.adjacencyList[vertex]

# a demo example code 
# Create a graph object
graph = GraphDS()

# Add vertices to the graph
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

# Add edges between vertices
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('A', 'C')

# Check if an edge exists between two vertices
print(graph.hasEdge('A', 'B'))  # Output: True
print(graph.hasEdge('B', 'C'))  # Output: True
print(graph.hasEdge('A', 'C'))  # Output: True
print(graph.hasEdge('A', 'D'))  # Output: False (D doesn't exist)

# Get neighbors of a vertex
print(graph.getNeighbors('A'))  # Output: ['B', 'C']
print(graph.getNeighbors('B'))  # Output: ['A', 'C']
print(graph.getNeighbors('C'))  # Output: ['B', 'A']
