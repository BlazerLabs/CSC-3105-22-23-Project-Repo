// i worked on two data structures ie Array & linked List
// chukwuemeka chinecherem innocent  20/csc/028


// Array
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get element at index
    get(index) {
        return this.data[index];
    }

    // Add element at the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    // Remove last element
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Delete element at index
    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    // Helper method to shift items to the left
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

// ouput
const customArray = new CustomArray();
customArray.push(1);
customArray.push(2);
customArray.push(3);
console.log(customArray.get(1)); // Output: 2
console.log(customArray.pop()); // Output: 3
customArray.delete(0);
console.log(customArray); // Output: { length: 1, data: { '1': 2 } }




//Linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = { data: data, next: null };
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

    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

// output
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.remove(2); // Removes 2
console.log(linkedList);









