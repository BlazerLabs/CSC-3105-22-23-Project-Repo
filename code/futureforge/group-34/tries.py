

# A trie (or prefix tree) is a tree-like data structure used for efficiently storing and retrieving a dynamic set of strings. 
# Each node in a trie represents a single character of a string, and paths from the root to a node represent prefixes of strings.

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        """Inserts a word into the trie."""
        current_node = self.root
        for char in word:
            if char not in current_node.children:
                current_node.children[char] = TrieNode()
            current_node = current_node.children[char]
        current_node.is_end_of_word = True

    def search(self, word):
        """Checks if a word exists in the trie."""
        current_node = self.root
        for char in word:
            if char not in current_node.children:
                return False
            current_node = current_node.children[char]
        return current_node.is_end_of_word

    def starts_with(self, prefix):
        """Checks if there is any word in the trie that starts with the given prefix."""
        current_node = self.root
        for char in prefix:
            if char not in current_node.children:
                return False
            current_node = current_node.children[char]
        return True

# Example usage of Trie
trie = Trie()

trie.insert("apple")
trie.insert("apricot")
trie.insert("banana")

print(trie.search("apple"))  # Output: True
print(trie.search("apricot"))  # Output: True
print(trie.search("orange"))  # Output: False

print(trie.starts_with("app"))  # Output: True
print(trie.starts_with("ora"))  # Output: False