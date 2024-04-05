//LinkedList implementation task using JavaScript
//Author: Ukweni Godswill Ekpezu
//Reg No: 20/CSC/266
// Node class represents a single element in the linked list
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node, initially set to null
    }
}

// LinkedList class represents the linked list data structure
class LinkedList {
    constructor() {
        this.head = null; // Pointer to the first node in the list, initially set to null
        this.size = 0; // Size of the linked list, initially set to 0
    }
        // Method to append a new node with data at the end of the list
    append(data) {
        const newNode = new Node(data); // Create a new node with the given data

        if (!this.head) { // If the list is empty
            this.head = newNode; // Set the new node as the head
        } else {
            let current = this.head; // Start traversal from the head
            while (current.next) { // Traverse until the last node
                current = current.next;
            }
            current.next = newNode; // Set the next pointer of the last node to the new node
        }

        this.size++; // Increment the size of the list
    }

    // Method to insert a new node with data at a specific position in the list
    insertAt(data, index) {
        if (index < 0 || index > this.size) { // Invalid index check
            return false; // Return false if index is out of range
        }


}
