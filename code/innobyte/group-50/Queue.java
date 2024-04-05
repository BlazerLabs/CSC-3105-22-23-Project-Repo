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

    // Method to add an element to the rear of the queue (enqueue)
    public void enqueue(T element) {
        if (size == elements.length) { // Check if the array is full
            resize(elements.length * 2); // Resize the array if it's full
        }
        rear = (rear + 1) % elements.length; // Calculate the new rear index
        elements[rear] = element; // Add the element to the rear
        size++; // Increment the size
    }

    // Method to remove and return the element at the front of the queue (dequeue)
    public T dequeue() {
        if (isEmpty()) { // Check if the queue is empty
            throw new IllegalStateException("Queue is empty"); // Throw an exception if the queue is empty
        }
        T removed = elements[front]; // Get the element at the front
        elements[front] = null; // Help with garbage collection
        front = (front + 1) % elements.length; // Calculate the new front index
        size--; // Decrement the size
        if (size > 0 && size == elements.length / 4) { // Check if the array is less than 25% full
            resize(elements.length / 2); // Resize the array to half of its current size
        }
        return removed; // Return the removed element
    }

    // Method to return the element at the front of the queue without removing it (peek)
    public T peek() {
        if (isEmpty()) { // Check if the queue is empty
            throw new IllegalStateException("Queue is empty"); // Throw an exception if the queue is empty
        }
        return elements[front]; // Return the element at the front
    }

    // Method to check if the queue is empty
    public boolean isEmpty() {
        return size == 0; // Check if the size is zero
    }

    // Method to get the size of the queue
    public int size() {
        return size; // Return the current size of the queue
    }

}

