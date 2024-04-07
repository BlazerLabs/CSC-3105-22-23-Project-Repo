// CEO Work 20/CSC/119

// A trie (or prefix tree) is a tree-like data structure used for efficient retrieval of 
// keys that share a common prefix. Each node in a trie represents a single character of a key, 
// and the path from the root to a node spells out a key.

class TrieNode {
    constructor() {
        this.children = {}; // Map of child nodes (character to TrieNode)
        this.isEndOfWord = false; // Flag to indicate end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Root of the trie
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }

        current.isEndOfWord = true; // Mark end of the inserted word
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                return false; // Character not found
            }
            current = current.children[char];
        }

        return current.isEndOfWord; // Check if end of word is reached
    }

    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) {
                return false; // Character not found
            }
            current = current.children[char];
        }

        return true; // Prefix found
    }
}

// Example usage of Trie
const trie = new Trie();

trie.insert("apple");
trie.insert("apricot");
trie.insert("banana");
trie.insert("orange");

console.log("Search 'apple':", trie.search("apple")); // Output: true
console.log("Search 'apricot':", trie.search("apricot")); // Output: true
console.log("Search 'banana':", trie.search("banana")); // Output: true
console.log("Search 'orange':", trie.search("orange")); // Output: true
console.log("Search 'grape':", trie.search("grape")); // Output: false

console.log("Starts with 'ap':", trie.startsWith("ap")); // Output: true
console.log("Starts with 'ban':", trie.startsWith("ban")); // Output: true
console.log("Starts with 'ora':", trie.startsWith("ora")); // Output: true
console.log("Starts with 'pea':", trie.startsWith("pea")); // Output: false