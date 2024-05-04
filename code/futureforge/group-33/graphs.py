#Section worked on by Ojobo Chiamaka Emilia 20/CSC/102

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

