

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