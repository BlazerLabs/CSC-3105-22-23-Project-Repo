#Section worked on by Ojobo Chiamaka Emilia 20/CSC/102

# Hash Tables
# A hash table is a data structure that implements an associative array abstract data type, 
# a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots 
# from which the desired value can be found. Here's a basic implementation of a hash table in Python:

class HashTable:
    def __init__(self):
        self.size = 10
        self.table = [[] for _ in range(self.size)]

    def _hash_function(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash_function(key)
        self.table[index].append((key, value))

    def search(self, key):
        index = self._hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self._hash_function(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return

# Example usage
hash_table = HashTable()
hash_table.insert("apple", 10)
hash_table.insert("banana", 20)
hash_table.insert("orange", 30)

print("Search for 'apple':", hash_table.search("apple"))  # Output: 10
print("Search for 'grape':", hash_table.search("grape"))  # Output: None

hash_table.remove("banana")
print("Search for 'banana':", hash_table.search("banana"))  # Output: None