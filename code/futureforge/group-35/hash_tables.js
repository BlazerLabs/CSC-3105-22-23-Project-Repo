//CEO's Work 20/CSC/119

// A hash table (or hash map) is a data structure that implements an associative array abstract data type, 
// where keys are mapped to values using a hash function. Hash tables offer efficient insertion, deletion, and lookup operations.


class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);  // Array of buckets (each bucket is an array)
    }

    hash(key) {
        return key.toString().length % this.size;  // Simple hash function based on key length
    }

    set(key, value) {
        const hashIndex = this.hash(key);
        const bucket = this.buckets[hashIndex];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;  // Update existing key-value pair
                return;
            }
        }

        bucket.push([key, value]);  // Add new key-value pair
    }

    get(key) {
        const hashIndex = this.hash(key);
        const bucket = this.buckets[hashIndex];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];  // Return value associated with the key
            }
        }

        return undefined;  // Key not found
    }

    remove(key) {
        const hashIndex = this.hash(key);
        const bucket = this.buckets[hashIndex];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);  // Remove key-value pair
                return;
            }
        }
    }
}

// Example usage of HashTable
const ht = new HashTable();

ht.set("name", "John");
ht.set("age", 30);
ht.set("city", "New York");

console.log("Name:", ht.get("name"));  // Output: John
console.log("Age:", ht.get("age"));  // Output: 30

ht.remove("age");
console.log("Age after removal:", ht.get("age"));  // Output: undefined