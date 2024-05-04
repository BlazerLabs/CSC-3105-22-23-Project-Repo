//CEO's Work 20/CSC/119

// A trie (or prefix tree) is a tree-like data structure used for efficiently storing and retrieving a dynamic set of strings. 
// Each node in a trie represents a single character of a string. 
// The structure of a trie allows for quick lookups and prefix-based searches.



class TrieNode {
    constructor() {
        this.children = {};  // Map of child nodes (character to TrieNode)
        this.isEndOfWord = false;  // Flag to indicate end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();  // Root node of the trie
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();  // Create new node if not exists
            }
            current = current.children[char];  // Move to the next node
        }

        current.isEndOfWord = true;  // Mark end of the inserted word
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                return false;  // Character not found, word does not exist
            }
            current = current.children[char];  // Move to the next node
        }

        return current.isEndOfWord;  // Check if we reached the end of a valid word
    }

    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) {
                return false;  // Prefix not found
            }
            current = current.children[char];  // Move to the next node
        }

        return true;  // Prefix found in the trie
    }
}

// Example usage of Trie
const trie = new Trie();

trie.insert("apple");
trie.insert("apricot");
trie.insert("banana");
trie.insert("orange");

console.log("Search 'apple':", trie.search("apple"));  // Output: true
console.log("Search 'apricot':", trie.search("apricot"));  // Output: true
console.log("Search 'banana':", trie.search("banana"));  // Output: true
console.log("Search 'orange':", trie.search("orange"));  // Output: true
console.log("Search 'grape':", trie.search("grape"));  // Output: false

console.log("Starts with 'ap':", trie.startsWith("ap"));  // Output: true
console.log("Starts with 'ban':", trie.startsWith("ban"));  // Output: true
console.log("Starts with 'ora':", trie.startsWith("ora"));  // Output: true
console.log("Starts with 'pea':", trie.startsWith("pea"));  // Output: false