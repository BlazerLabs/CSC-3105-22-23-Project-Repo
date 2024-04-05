// hash table data structure task for java assigned to me
// Author : Ekom Jeffery mfam
//Reg: 20/CSC/243

import java.util.LinkedList;

public class HashTable<Key, Value> {
    private int size; // Size of the hash table array
    private LinkedList<Entry<Key, Value>>[] table; // Array to store linked lists of hash nodes (buckets)

    // Constructor to initialize the hash table with a given size
    public HashTable(int size) {
        this.size = size;
        table = new LinkedList[size]; // Initialize the array of linked lists
        for (int i = 0; i < size; i++) {
            table[i] = new LinkedList<>(); // Initialize each bucket with a linked list
        }
    }

    // Method to put a key-value pair into the hash table
    public void put(Key key, Value value) {
        int index = hash(key); // Get the index for the key
        LinkedList<Entry<Key, Value>> list = table[index]; // Get the linked list (bucket) at the calculated index
        for (Entry<Key, Value> entry : list) { // Iterate through the linked list
            if (entry.key.equals(key)) { // If the key already exists, update the value
                entry.value = value;
                return;
            }
        }
        list.add(new Entry<>(key, value)); // If the key doesn't exist, add a new entry to the linked list (bucket)
    }

    // Method to get the value associated with a given key from the hash table
    public Value get(Key key) {
        int index = hash(key); // Get the index for the key
        LinkedList<Entry<Key, Value>> list = table[index]; // Get the linked list (bucket) at the calculated index
        for (Entry<Key, Value> entry : list) { // Iterate through the linked list
            if (entry.key.equals(key)) { // If the key is found, return the associated value
                return entry.value;
            }
        }
        return null; // Return null if the key is not found
    }

    // Method to remove a key-value pair from the hash table
    public void remove(Key key) {
        int index = hash(key); // Get the index for the key
        LinkedList<Entry<Key, Value>> list = table[index]; // Get the linked list (bucket) at the calculated index
        list.removeIf(entry -> entry.key.equals(key)); // Remove the entry with the given key
    }

    // Hash function to calculate the index for a given key
    private int hash(Key key) {
        // Simple hash function using Java's built-in hashCode method and modulo operator
        return Math.abs(key.hashCode() % size);
    }

    // Entry class to represent a key-value pair
    private static class Entry<Key, Value> {
        Key key;
        Value value;

        Entry(Key key, Value value) {
            this.key = key;
            this.value = value;
        }
    }
}
