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

    const newNode = new Node(data); // Create a new node with the given data

        if (index === 0) { // If inserting at the beginning
            newNode.next = this.head; // Set the next pointer of the new node to the current head
            this.head = newNode; // Set the new node as the head
        } else {
            let current = this.head; // Start traversal from the head
            let prev = null; // Pointer to the previous node, initially set to null
            let i = 0;

            while (i < index) { // Traverse until reaching the desired index
                prev = current;
                current = current.next;
                i++;
            }

            newNode.next = current; // Set the next pointer of the new node to the current node
            prev.next = newNode; // Set the next pointer of the previous node to the new node
        }

        this.size++; // Increment the size of the list
        return true; // Return true indicating successful insertion
    }

    // Method to remove the node at a specific position in the list
    removeAt(index) {
        if (index < 0 || index >= this.size || !this.head) { // Invalid index or empty list check
            return null; // Return null if index is out of range or list is empty
        }

        let current = this.head; // Start traversal from the head
        let prev = null; // Pointer to the previous node, initially set to null
        let i = 0;

        if (index === 0) { // If removing the first node
            this.head = current.next; // Update the head to the next node
        } else {
            while (i < index) { // Traverse until reaching the desired index
                prev = current;
                current = current.next;
                i++;
            }

            prev.next = current.next; // Set the next pointer of the previous node to the next node of the current node
        }

        this.size--; // Decrement the size of the list
        return current.data; // Return the data of the removed node
    }

    // Method to find the index of the first occurrence of a given data in the list
    indexOf(data) {
        let current = this.head; // Start traversal from the head
        let index = 0; // Initialize index to 0

        while (current) { // Traverse until reaching the end of the list
            if (current.data === data) { // If current node's data matches the given data
                return index; // Return the index
            }
            current = current.next; // Move to the next node
            index++; // Increment index
        }

        return -1; // Return -1 if data is not found in the list
    }

    // Method to print the elements of the list
    print() {
        let current = this.head; // Start traversal from the head
        let result = ''; // Initialize an empty string to store the result

        while (current) { // Traverse until reaching the end of the list
            result += current.data + ' '; // Append current node's data to the result string
            current = current.next; // Move to the next node
        }

        console.log(result); // Print the result string
    }
}

// Example test usage for the above code:
const list = new LinkedList(); // Create a new linked list
list.append(1); // Append elements to the list
list.append(2);
list.append(3);
list.append(4);
list.print(); // Output: 1 2 3 4

list.insertAt(2.5, 2); // Insert an element at a specific position
list.print(); // Output: 1 2 2.5 3 4

list.removeAt(3); // Remove an element at a specific position
list.print(); // Output: 1 2 2.5 4

console.log(list.indexOf(2.5)); // Output: 2

