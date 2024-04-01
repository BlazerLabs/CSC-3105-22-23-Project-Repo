class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        for (let kvp of this.buckets[index]) {
            if (kvp[0] === key) {
                kvp[1] = value; // Update existing key
                return;
            }
        }
        this.buckets[index].push([key, value]); // Add new key
    }

    get(key) {
        const index = this.hash(key);
        for (let kvp of this.buckets[index]) {
            if (kvp[0] === key) {
                return kvp[1];
            }
        }
        return undefined; // Key not found
    }

    delete(key) {
        const index = this.hash(key);
        this.buckets[index] = this.buckets[index].filter(kvp => kvp[0] !== key);
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            console.log(`Bucket ${i}:`);
            for (let kvp of this.buckets[i]) {
                console.log(`  ${kvp[0]}: ${kvp[1]}`);
            }
        }
    }
}