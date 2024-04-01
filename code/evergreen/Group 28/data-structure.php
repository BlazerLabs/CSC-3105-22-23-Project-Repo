// Array implementation
class MyArray {
    private $array;
    private $size;
    
    public function __construct($capacity) {
        $this->array = array_fill(0, $capacity, null);
        $this->size = 0;
    }

    public function insert($index, $element) {
        if ($index < 0 || $index >= count($this->array)) {
            return false; // Out of bounds
        }
        $this->array[$index] = $element;
        $this->size++;
        return true;
    }

    public function delete($index) {
        if ($index < 0 || $index >= count($this->array)) {
            return false; // Out of bounds
        }
        $this->array[$index] = null;
        $this->size--;
        return true;
    }

    public function access($index) {
        if ($index < 0 || $index >= count($this->array)) {
            return null; // Out of bounds
        }
        return $this->array[$index];
    }

    public function getSize() {
        return $this->size;
    }
}

// Linked list implementation
class ListNode {
    public $val;
    public $next;
    
    public function __construct($val) {
        $this->val = $val;
        $this->next = null;
    }
}

class MyLinkedList {
    private $head;
    
    public function __construct() {
        $this->head = null;
    }

    // Implement methods for insertion, deletion, traversal, etc.
}

// Stack implementation
class MyStack {
    private $array;
    private $top;
    
    public function __construct() {
        $this->array = [];
        $this->top = -1;
    }

    // Implement methods for push, pop, peek, etc.
}

// Queue implementation
class MyQueue {
    private $array;
    private $front;
    private $rear;
    
    public function __construct() {
        $this->array = [];
        $this->front = 0;
        $this->rear = -1;
    }

    // Implement methods for enqueue, dequeue, peek, etc.
}

// Binary tree implementation
class TreeNode {
    public $val;
    public $left;
    public $right;
    
    public function __construct($val) {
        $this->val = $val;
        $this->left = null;
        $this->right = null;
    }
}

class BinaryTree {
    private $root;
    
    public function __construct() {
        $this->root = null;
    }

    // Implement methods for insertion, deletion, traversal, etc.
}

// Graph implementation (using adjacency list)
class Graph {
    private $V;
    private $adjList;
    
    public function __construct($V) {
        $this->V = $V;
        $this->adjList = array_fill(0, $V, []);
    }

    // Implement methods for adding edges, traversal, etc.
}

// Hash table implementation
class MyHashTable {
    private $capacity;
    private $table;
    
    public function __construct($capacity) {
        $this->capacity = $capacity;
        $this->table = array_fill(0, $capacity, null);
    }

    // Implement methods for insertion, deletion, searching, etc.
}