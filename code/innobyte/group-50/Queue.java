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

    // Method to resize the array
    private void resize(int capacity) {
        T[] newArray = (T[]) new Object[capacity]; // Create a new array with the specified capacity
        for (int i = 0; i < size; i++) {
            newArray[i] = elements[(front + i) % elements.length]; // Copy elements from the old array to the new array
        }
        elements = newArray; // Update the elements array reference to the new array
        front = 0; // Reset the front index
        rear = size - 1; // Update the rear index
    }

    // Main method for testing the data structure
    public static void main(String[] args) {
        Queue<Integer> queue = new Queue<>(3); // Create a queue with capacity 3
        queue.enqueue(10); // Enqueue elements into the queue
        queue.enqueue(20);
        queue.enqueue(30);

        System.out.println("Size of the queue: " + queue.size()); // Print the size of the queue

        System.out.println("Dequeued element: " + queue.dequeue()); // Dequeue and print an element
        System.out.println("Dequeued element: " + queue.dequeue());

        System.out.println("Element at the front of the queue: " + queue.peek()); // Peek and print the element at the front

        System.out.println("Size of the queue after dequeue: " + queue.size()); // Print the size of the queue after dequeue
    }

}

