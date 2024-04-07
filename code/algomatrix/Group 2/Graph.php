<?php
class Graph {
    protected $vertices;

    public function __construct() {
        $this->vertices = [];
    }

    public function addVertex($vertex) {
        if (!isset($this->vertices[$vertex])) {
            $this->vertices[$vertex] = [];
        }
    }

    public function addEdge($vertex1, $vertex2) {
        if (!isset($this->vertices[$vertex1]) || !isset($this->vertices[$vertex2])) {
            return; // Vertex not found
        }
        $this->vertices[$vertex1][] = $vertex2;
        $this->vertices[$vertex2][] = $vertex1; // Undirected graph
    }

    public function display() {
        foreach ($this->vertices as $vertex => $neighbors) {
            echo "$vertex -> ";
            echo implode(', ', $neighbors) . "\n";
        }
    }
}