// Queue data structure task implemented in java
// Author: Okem Emmanuel Friday
// Reg No: 20/CSC/263

public class Queue<T> {
    private static final int DEFAULT_CAPACITY = 10; // Default capacity of the queue
    private T[] elements; // Array to store elements of the queue
    private int size; // Current number of elements in the queue
    private int front; // Index of the front element
    private int rear; // Index of the rear element

    // Constructor to initialize the queue with default capacity
    public Queue() {
        this(DEFAULT_CAPACITY);
    }

    // Constructor to initialize the queue with a specified capacity
    public Queue(int capacity) {
        elements = (T[]) new Object[capacity]; // Create an array of specified capacity to store elements
        size = 0; // Initialize the size to zero as the queue is empty initially
        front = 0; // Initialize the front index
        rear = -1; // Initialize the rear index to -1 as there are no elements in the queue
    }

}

