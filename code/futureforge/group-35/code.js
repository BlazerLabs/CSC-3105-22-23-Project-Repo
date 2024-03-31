//Section worked on by Irek Jenjoe Ben 20/CSC/066

// Arrays
// Arrays are a fundamental data structure used to store a collection of elements. 
// In JavaScript, arrays are dynamic and can hold elements of any type. 
// Each element in an array has a numeric index, starting from 0.

class Array {
    constructor() {
        this.data = [];
    }

    // Insert an element at the end of the array
    insert(item) {
        this.data.push(item);
    }

    // Remove an element from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data.splice(index, 1)[0];
    }

    // Access an element at a specific index
    access(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data[index];
    }

    // Update an element at a specific index
    update(index, newValue) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        this.data[index] = newValue;
    }

    // Get the current length of the array
    length() {
        return this.data.length;
    }

    // Print the array
    print() {
        console.log(this.data.join(', '));
    }
}

// Example usage
const array = new Array();
array.insert(10);
array.insert(20);
array.insert(30);

array.print(); // Output: 10, 20, 30
console.log("Access element at index 1:", array.access(1)); // Output: 20
array.update(1, 50);
array.print(); // Output: 10, 50, 30
console.log("Remove element at index 0:", array.removeAt(0)); // Output: 10
array.print(); // Output: 50, 30



// Linked Lists
// A linked list is a linear data structure consisting of nodes where each node contains a value and a 
// reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not have indices 
// and elements are not stored in contiguous memory locations.


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning of the linked list
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert a new node at the end of the linked list
    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Remove the first occurrence of a value from the linked list
    remove(value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.value === value) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    // Print the linked list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.insertAtHead(10);
linkedList.insertAtHead(20);
linkedList.insertAtTail(30);

linkedList.print(); // Output: 20 -> 10 -> 30
linkedList.remove(10);
linkedList.print(); // Output: 20 -> 30
