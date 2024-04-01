class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class Stack {
    private ListNode top;

    public Stack() {
        this.top = null;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public void push(int val) {
        ListNode newNode = new ListNode(val);
        if (isEmpty()) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
        }
    }

    public int pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        int value = top.val;
        top = top.next;
        return value;
    }

    public int peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return top.val;
    }

    public void display() {
        ListNode temp = top;
        while (temp != null) {
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        System.out.print("Stack: ");
        stack.display(); // Output: Stack: 4 3 2 1

        System.out.println("Popped item: " + stack.pop()); // Output: Popped item: 4

        System.out.print("Stack after pop: ");
        stack.display(); // Output: Stack after pop: 3 2 1

        System.out.println("Top item: " + stack.peek()); // Output: Top item: 3
    }
}
