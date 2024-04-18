<?php
// DataStructuresExample.php

// Linked List
class ListNode {
    public $data;
    public $next;

    public function __construct($data) {
        $this->data = $data;
        $this->next = null;
    }
}

class LinkedList {
    public $head;

    public function insert($data) {
        $newNode = new ListNode($data);
        $newNode->next = $this->head;
        $this->head = $newNode;
    }
}

// Array
$myArray = [1, 2, 3, 4, 5];
echo "Array elements: " . implode(', ', $myArray) . "\n";

// Stack
$stack = [];
array_push($stack, 10); // Push an element onto the stack
$poppedItem = array_pop($stack); // Pop the top element from the stack
echo "Popped item: $poppedItem\n";

// Queue
class Queue {
    public $elements = [];
    public $head = 0;
    public $tail = 0;

    public function enqueue($element) {
        $this->elements[$this->tail] = $element;
        $this->tail++;
    }

    public function dequeue() {
        $item = $this->elements[$this->head];
        unset($this->elements[$this->head]);
        $this->head++;
        return $item;
    }
}

$myQueue = new Queue();
$myQueue->enqueue('A');
$myQueue->enqueue('B');
$dequeuedItem = $myQueue->dequeue(); // Removes 'A'
echo "Dequeued item: $dequeuedItem\n";

// Tree
class TreeNode {
    public $key;
    public $value;
    public $children = [];

    public function __construct($key, $value = null) {
        $this->key = $key;
        $this->value = $value ?? $key;
    }
}

class Tree {
    public $root;

    public function __construct($key, $value = null) {
        $this->root = new TreeNode($key, $value);
    }

}

$myTree = new Tree('Root');
$myTree->root->children[] = new TreeNode('Child1');

// Graph
class Graph {
    public $adjList = [];

    public function addEdge($vertex1, $vertex2) {
        if (!isset($this->adjList[$vertex1])) {
            $this->adjList[$vertex1] = [];
        }
        $this->adjList[$vertex1][] = $vertex2;
    }

}

$myGraph = new Graph();
$myGraph->addEdge('A', 'B');
$myGraph->addEdge('B', 'C');
?>
