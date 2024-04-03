// HASH-TABLE DATA STRUCTURE TASK
// AUTHOR: UDOM OBONGIYAKKE SATURDAY
//REGNO: 20/CSC/132

class MyHashTable {
    constructor() {
        // Initialize an empty object to store key-value pairs
        this.table = {};
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        this.table[key] = value;
    }

    // Retrieve the value associated with a given key
    get(key) {
        return this.table[key];
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        if (key in this.table) {
            delete this.table[key];
            return true;
        }
        return false;
    }

    // Check if the hash table contains a given key
    contains(key) {
        return key in this.table;
    }
}
