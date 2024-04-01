class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class Queue {
    ListNode front;
    ListNode rear;

    Queue() {
        this.front = null;
        this.rear = null;
    }

    public boolean isEmpty() {
        return front == null;
    }

    public void enqueue(int val) {
        ListNode newNode = new ListNode(val);
        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    public int dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        int value = front.val;
        front = front.next;
        if (front == null) {
            rear = null;
        }
        return value;
    }

    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return front.val;
    }

    public void display() {
        ListNode temp = front;
        while (temp != null) {
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Queue queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);

        System.out.print("Queue: ");
        queue.display(); // Output: Queue: 1 2 3 4

        System.out.println("Dequeued item: " + queue.dequeue()); // Output: Dequeued item: 1

        System.out.print("Queue after dequeue: ");
        queue.display(); // Output: Queue after dequeue: 2 3 4

        System.out.println("Front item: " + queue.peek()); // Output: Front item: 2
    }
}
