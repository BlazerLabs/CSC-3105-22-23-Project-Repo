
# A graph is a non-linear data structure consisting of a collection of nodes (vertices) and edges that connect pairs of nodes. 
# Graphs are used to represent networks and relationships between entities.

class Graph:
    def __init__(self):
        self.vertices = {}

    def add_vertex(self, vertex):
        """Adds a vertex to the graph."""
        if vertex not in self.vertices:
            self.vertices[vertex] = []

    def add_edge(self, vertex1, vertex2):
        """Adds an edge between two vertices in the graph."""
        if vertex1 in self.vertices and vertex2 in self.vertices:
            self.vertices[vertex1].append(vertex2)
            self.vertices[vertex2].append(vertex1)  # For undirected graph

    def print_graph(self):
        """Prints the graph as an adjacency list."""
        for vertex, neighbors in self.vertices.items():
            print(f"{vertex} -> {', '.join(neighbors)}")

# Example usage of Graph
graph = Graph()

graph.add_vertex("A")
graph.add_vertex("B")
graph.add_vertex("C")
graph.add_vertex("D")

graph.add_edge("A", "B")
graph.add_edge("A", "C")
graph.add_edge("B", "C")
graph.add_edge("C", "D")

graph.print_graph()