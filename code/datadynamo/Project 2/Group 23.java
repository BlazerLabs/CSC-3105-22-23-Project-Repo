// DataStructuresExample.java

import java.util.*;

class TreeNode {
    int key;
    List<TreeNode> children;

    TreeNode(int key) {
        this.key = key;
        this.children = new ArrayList<>();
    }
}

class Tree {
    TreeNode root;

    Tree(int key) {
        this.root = new TreeNode(key);
    }
}

public class DataStructuresExample {
    public static void main(String[] args) {
        // Array
        int[] myArray = {1, 2, 3, 4, 5};
        System.out.println("Array elements: " + Arrays.toString(myArray));

        // Stack
        Stack<Integer> myStack = new Stack<>();
        myStack.push(10);
        myStack.push(20);
        myStack.push(30);
        System.out.println("Popped from stack: " + myStack.pop());

        // Queue
        Queue<String> myQueue = new LinkedList<>();
        myQueue.add("Alice");
        myQueue.add("Bob");
        myQueue.add("Charlie");
        System.out.println("Dequeued from queue: " + myQueue.poll());

        // Linked List
        LinkedList<String> myList = new LinkedList<>();
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Cherry");
        System.out.println("Linked List: " + myList);

        // Tree
        Tree myTree = new Tree(1);
        myTree.root.children.add(new TreeNode(2));
        myTree.root.children.add(new TreeNode(3));

        // Graph
        Map<Integer, List<Integer>> myGraph = new HashMap<>();
        myGraph.put(0, Arrays.asList(1, 2));
        myGraph.put(1, Arrays.asList(2, 3));

        // Print graph
        for (int vertex : myGraph.keySet()) {
            System.out.println("Vertex " + vertex + " connected to: " + myGraph.get(vertex));
        }
    }
}
