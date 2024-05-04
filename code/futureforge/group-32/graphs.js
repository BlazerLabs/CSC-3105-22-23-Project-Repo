// CEO's Work

// A graph is a non-linear data structure consisting of a collection of nodes (vertices) 
// and edges that connect pairs of nodes. Graphs are used to represent networks and relationships between entities.

class Graph {
    constructor() {
        this.vertices = {};  // Object to store vertices and their adjacent vertices (adjacency list)
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
        this.vertices[vertex2].push(vertex1);  // For undirected graph
    }

    printGraph() {
        for (let vertex in this.vertices) {
            console.log(`${vertex} -> ${this.vertices[vertex].join(", ")}`);
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