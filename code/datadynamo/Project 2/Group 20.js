// DataStructuresExample.js

// Linked List
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

// Array
const myArray = [1, 2, 3, 4, 5];
console.log('Array elements:', myArray);

// Stack
const stack = [];
stack.push(10); // Push an element onto the stack
stack.pop(); // Pop the top element from the stack

// Queue
class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
}

const myQueue = new Queue();
myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.dequeue(); // Removes 'A'

// Tree
class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
    }
}

const myTree = new Tree('Root');
myTree.root.children.push(new TreeNode('Child1'));

// Graph
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjList.has(vertex1)) {
            this.adjList.set(vertex1, []);
        }
        this.adjList.get(vertex1).push(vertex2);
    }
}

const myGraph = new Graph();
myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'C');
