//CEO's Work 20/CSC/119

// A trie (or prefix tree) is a tree-like data structure used for efficiently storing and retrieving a dynamic set of strings. 
// Each node in a trie represents a single character of a string. The structure of a trie allows for quick lookups and prefix-based searches.


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

        // Traverse through each character in the word
        for (let char of word) {
            if (!current.children[char]) {
                // Create a new node if the character doesn't exist
                current.children[char] = new TrieNode();
            }
            // Move to the child node corresponding to the character
            current = current.children[char];
        }

        // Mark the end of the inserted word
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;

        // Traverse through each character in the word
        for (let char of word) {
            if (!current.children[char]) {
                // If a character is not found, the word does not exist in the trie
                return false;
            }
            // Move to the child node corresponding to the character
            current = current.children[char];
        }

        // Check if we reached the end of a valid word
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;

        // Traverse through each character in the prefix
        for (let char of prefix) {
            if (!current.children[char]) {
                // If a character is not found, the prefix does not exist in the trie
                return false;
            }
            // Move to the child node corresponding to the character
            current = current.children[char];
        }

        // Prefix found in the trie
        return true;
    }
}

// Example usage of Trie
const trie = new Trie();

trie.insert("apple");
trie.insert("apricot");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple"));  // Output: true
console.log(trie.search("apricot"));  // Output: true
console.log(trie.search("banana"));  // Output: true
console.log(trie.search("orange"));  // Output: true
console.log(trie.search("grape"));  // Output: false

console.log(trie.startsWith("ap"));  // Output: true
console.log(trie.startsWith("ban"));  // Output: true
console.log(trie.startsWith("ora"));  // Output: true
console.log(trie.startsWith("pea"));  // Output: false