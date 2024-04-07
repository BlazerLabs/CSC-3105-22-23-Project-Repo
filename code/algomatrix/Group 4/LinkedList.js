class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.val + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}