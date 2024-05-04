//Section worked on by Irek Jenjoe Ben 20/CSC/066

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