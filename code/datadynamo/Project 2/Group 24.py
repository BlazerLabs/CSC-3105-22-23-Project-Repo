class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        self.graph[u].append(v)

    def get_neighbors(self, u):
        return self.graph.get(u, [])



# Create a new graph
graph = Graph()

# Add edges to the graph
graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 3)
graph.add_edge(2, 4)
graph.add_edge(2, 5)

# Get neighbors of a node
print(graph.get_neighbors(0))
print(graph.get_neighbors(1)) 
print(graph.get_neighbors(2))
print(graph.get_neighbors(3))
