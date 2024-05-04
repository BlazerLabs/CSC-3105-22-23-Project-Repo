#CEO's Work 20/CSC/119

# A hash table (or hash map) is a data structure that implements an associative array abstract data type, 
# where keys are mapped to values using a hash function. Hash tables offer efficient insertion, deletion, and lookup operations.

class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [None] * self.size

    def _hash_function(self, key):
        """Returns the hash value (index) for a given key."""
        return hash(key) % self.size

    def set(self, key, value):
        """Inserts a key-value pair into the hash table."""
        index = self._hash_function(key)
        if not self.buckets[index]:
            self.buckets[index] = []
        self.buckets[index].append((key, value))

    def get(self, key):
        """Returns the value associated with the given key."""
        index = self._hash_function(key)
        if self.buckets[index]:
            for stored_key, stored_value in self.buckets[index]:
                if stored_key == key:
                    return stored_value
        return None

    def remove(self, key):
        """Removes a key-value pair from the hash table."""
        index = self._hash_function(key)
        if self.buckets[index]:
            for i, (stored_key, _) in enumerate(self.buckets[index]):
                if stored_key == key:
                    self.buckets[index].pop(i)
                    return

# Example usage of HashTable
ht = HashTable()

ht.set("name", "John")
ht.set("age", 30)
ht.set("city", "New York")

print(ht.get("name"))  # Output: John
print(ht.get("age"))  # Output: 30

ht.remove("age")
print(ht.get("age"))  # Output: None