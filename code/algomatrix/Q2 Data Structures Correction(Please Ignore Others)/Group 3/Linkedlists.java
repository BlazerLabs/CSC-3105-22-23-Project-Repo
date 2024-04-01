class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class LinkedList {
    ListNode head;

    LinkedList() {
        this.head = null;
    }

    public void addNode(int val) {
        ListNode newNode = new ListNode(val);
        if (head == null) {
            head = newNode;
        } else {
            ListNode temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    public void display() {
        ListNode temp = head;
        while (temp != null) {
            System.out.print(temp.val + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addNode(1);
        list.addNode(2);
        list.addNode(3);
        list.addNode(4);

        System.out.print("Linked List: ");
        list.display(); // Output: Linked List: 1 2 3 4
    }
}
