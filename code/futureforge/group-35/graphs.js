//CEO's Work 20/CSC/119

// A graph is a non-linear data structure consisting of a collection of nodes (vertices) 
// and edges that connect pairs of nodes. Graphs are used to represent networks and relationships between entities.

class Graph {
    constructor() {
        this.vertices = new Map();  // Map to store vertices and their adjacent vertices (adjacency list)
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        this.vertices.get(vertex1).add(vertex2);
        this.vertices.get(vertex2).add(vertex1);  // For undirected graph
    }

    printGraph() {
        for (let [vertex, neighbors] of this.vertices) {
            console.log(`${vertex} -> ${Array.from(neighbors).join(", ")}`);
        }
    }
}

// Example usage of Graph
const graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

graph.printGraph();