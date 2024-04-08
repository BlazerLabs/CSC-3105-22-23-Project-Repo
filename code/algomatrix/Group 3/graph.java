import java.util.*;

public class Graph {
    private Map<Integer, List<Integer>> adjacencyList;

    public Graph() {
        adjacencyList = new HashMap<>();
    }

    public void addVertex(int vertex) {
        adjacencyList.put(vertex, new LinkedList<>());
    }

    public void addEdge(int source, int destination) {
        if (!adjacencyList.containsKey(source)) {
            addVertex(source);
        }
        if (!adjacencyList.containsKey(destination)) {
            addVertex(destination);
        }
        adjacencyList.get(source).add(destination);
        adjacencyList.get(destination).add(source); // For undirected graph
    }

    public void display() {
        for (Map.Entry<Integer, List<Integer>> entry : adjacencyList.entrySet()) {
            System.out.print(entry.getKey() + " -> ");
            for (int neighbor : entry.getValue()) {
                System.out.print(neighbor + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);

        graph.display();
    }
}