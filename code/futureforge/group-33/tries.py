#CEO's Work 20/CSC/119

# A trie, also known as a prefix tree, is a tree-like data structure used for efficiently storing and retrieving a dynamic set of strings. Each node in a trie represents a single character of a string. 
# The structure of a trie allows for quick lookups and prefix-based searches. Tries are commonly used in applications involving autocomplete, spell checkers, and prefix matching.

class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary to store child nodes
        self.is_end_of_word = False  # Flag to mark end of a word


class Trie:
    def __init__(self):
        self.root = TrieNode()  # Initialize the root node of the trie

    def insert(self, word):
        current = self.root

        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()  # Create a new node if char does not exist
            current = current.children[char]  # Move to the next node

        current.is_end_of_word = True  # Mark the end of the inserted word

    def search(self, word):
        current = self.root

        for char in word:
            if char not in current.children:
                return False  # Character not found, word does not exist
            current = current.children[char]  # Move to the next node

        return current.is_end_of_word  # Check if we reached the end of a valid word

    def starts_with(self, prefix):
        current = self.root

        for char in prefix:
            if char not in current.children:
                return False  # Prefix not found
            current = current.children[char]  # Move to the next node

        return True  # Prefix found in the trie


# Example usage of Trie
trie = Trie()

trie.insert("apple")
trie.insert("apricot")
trie.insert("banana")
trie.insert("orange")

print("Search 'apple':", trie.search("apple"))  # Output: True
print("Search 'apricot':", trie.search("apricot"))  # Output: True
print("Search 'banana':", trie.search("banana"))  # Output: True
print("Search 'orange':", trie.search("orange"))  # Output: True
print("Search 'grape':", trie.search("grape"))  # Output: False

print("Starts with 'ap':", trie.starts_with("ap"))  # Output: True
print("Starts with 'ban':", trie.starts_with("ban"))  # Output: True
print("Starts with 'ora':", trie.starts_with("ora"))  # Output: True
print("Starts with 'pea':", trie.starts_with("pea"))  # Output: False