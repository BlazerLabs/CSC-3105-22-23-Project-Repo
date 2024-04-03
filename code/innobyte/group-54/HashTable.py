# Hash table data structure task assigned to me
# Author Okon Victoria Esther
# REgno: 20/csc/221
class HashTableDS:
    def __init__(self, size):
        # Constructor to initialize the hash table with a given size.
        self.size = size
        # Initialize the array with None values to represent empty buckets
        self.table = [None] * size

    def hash(self, key):
        # Simple hash function to calculate the index for a given key.
        # Using Python's built-in hashing function and modulo operator
        hash_value = hash(key)
        return hash_value % self.size

    def createNode(self, key, value):
        # Creates a new node for the hash table.
        return {'key': key, 'value': value, 'next': None}

    def insert(self, key, value):
        # Insert a key-value pair into the hash table.
        index = self.hash(key)
        if self.table[index] is None:
            # If the bucket is empty, create a new node and store it in the bucket
            self.table[index] = self.createNode(key, value)
        else:
            # If the bucket is not empty, traverse the chain and insert at the end
            current = self.table[index]
            while current['next'] is not None:
                current = current['next']
            current['next'] = self.createNode(key, value)

    def get(self, key):
        # Retrieve the value associated with a given key from the hash table.
        index = self.hash(key)
        current = self.table[index]
        while current is not None:
            if current['key'] == key:
                return current['value']  # Key found, return the corresponding value
            current = current['next']  # Move to the next node in the chain
        return None  # Key not found

    def remove(self, key):
        # Remove a key-value pair from the hash table.
        index = self.hash(key)
        current = self.table[index]
        prev = None
        while current is not None:
            if current['key'] == key:
                if prev is None:
                    self.table[index] = current['next']  # Remove the head node
                else:
                    prev['next'] = current['next']  # Remove a non-head node
                return  # Key removed, exit the function
            prev = current
            current = current['next']
