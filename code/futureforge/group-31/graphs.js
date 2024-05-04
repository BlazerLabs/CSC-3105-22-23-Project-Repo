// CEO Work 20/CSC/119

// A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections) that link pairs of vertices. 
// Graphs are used to represent networks and relationships between entities.

class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.vertices[vertex2]) {
            this.addVertex(vertex2);
        }
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1); // For undirected graph
    }

    printGraph() {
        for (let vertex in this.vertices) {
            console.log(vertex + " -> " + this.vertices[vertex].join(", "));
        }
    }
}

// Example usage of Graph
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.printGraph();