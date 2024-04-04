//Section worked on by Ikechukwu Chimezirim 20/CSC/245

// Arrays
//An array is a linear data structure that stores a collection of elements. 
//In PHP, arrays can hold elements of various types, such as integers, strings, or objects. 
//They are indexed collections of data, where each element is associated with a numeric index starting from 0. Arrays can be static or dynamic in size.

class MyArray {
    private $data; // Private property to store array elements

    public function __construct() {
        $this->data = []; // Initialize array
    }

    // Insert an element at the end of the array
    public function insert($item) {
        $this->data[] = $item; // Add item to the end of the array
    }

    // Remove an element from a specific index
    public function removeAt($index) {
        if ($index < 0 || $index >= count($this->data)) {
            return "Index out of bounds"; // Check if index is valid
        }
        array_splice($this->data, $index, 1); // Remove element at index
    }

    // Access an element at a specific index
    public function access($index) {
        if ($index < 0 || $index >= count($this->data)) {
            return "Index out of bounds"; // Check if index is valid
        }
        return $this->data[$index]; // Return element at index
    }

    // Update an element at a specific index
    public function update($index, $newValue) {
        if ($index < 0 || $index >= count($this->data)) {
            return "Index out of bounds"; // Check if index is valid
        }
        $this->data[$index] = $newValue; // Update element at index
    }

    // Get the current length of the array
    public function length() {
        return count($this->data); // Return length of array
    }

    // Print the array
    public function printArray() {
        echo implode(', ', $this->data); // Print array elements separated by comma
    }
}

// Example usage
$array = new MyArray(); // Create instance of MyArray class
$array->insert(10); // Insert elements
$array->insert(20);
$array->insert(30);

$array->printArray(); // Output: 10, 20, 30
echo "\nAccess element at index 1: " . $array->access(1); // Output: 20
$array->update(1, 50); // Update element
$array->printArray(); // Output: 10, 50, 30
$array->removeAt(0); // Remove element
$array->printArray(); // Output: 50, 30


//Linked Lists
//A linked list is a linear data structure consisting of nodes where each node 
//contains a value and a reference (pointer) to the next node in the sequence. 
//Unlike arrays, linked lists do not have indices, and elements are not stored in contiguous memory locations. -->

class Node {
    public $value; // Value of the node
    public $next; // Reference to the next node

    public function __construct($value) {
        $this->value = $value; // Initialize node with value
        $this->next = null; // Initialize next pointer as null
    }
}

class LinkedList {
    private $head; // Reference to the first node (head) of the linked list

    public function __construct() {
        $this->head = null; // Initialize head as null for an empty list
    }

    // Insert a new node at the beginning of the linked list
    public function insertAtHead($value) {
        $newNode = new Node($value); // Create a new node
        $newNode->next = $this->head; // Set next of new node to current head
        $this->head = $newNode; // Set new node as head
    }

    // Insert a new node at the end of the linked list
    public function insertAtTail($value) {
        $newNode = new Node($value); // Create a new node
        if (!$this->head) {
            $this->head = $newNode; // If list is empty, set new node as head
            return;
        }
        $current = $this->head; // Start traversal from head
        while ($current->next) {
            $current = $current->next; // Traverse to the last node
        }
        $current->next = $newNode; // Set next of last node to new node
    }

    // Remove the first occurrence of a value from the linked list
    public function remove($value) {
        if (!$this->head) {
            return; // If list is empty, return
        }
        if ($this->head->value === $value) {
            $this->head = $this->head->next; // If value found at head, remove head
            return;
        }
        $current = $this->head;
        $prev = null;
        while ($current) {
            if ($current->value === $value) {
                $prev->next = $current->next; // Remove node by updating previous node's next pointer
                return;
            }
            $prev = $current;
            $current = $current->next; // Move to next node
        }
    }

    // Print the linked list
    public function printList() {
        $current = $this->head; // Start traversal from head
        $values = [];
        while ($current) {
            $values[] = $current->value; // Add value of each node to array
            $current = $current->next; // Move to next node
        }
        echo implode(' -> ', $values); // Print array elements separated by arrow symbol
    }
}

// Example usage
$linkedList = new LinkedList(); // Create instance of LinkedList class
$linkedList->insertAtHead(10); // Insert elements
$linkedList->insertAtHead(20);
$linkedList->insertAtTail(30);

$linkedList->printList(); // Output: 20 -> 10 -> 30
$linkedList->remove(10); // Remove element
$linkedList->printList(); // Output: 20 -> 30