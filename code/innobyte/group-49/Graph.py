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
