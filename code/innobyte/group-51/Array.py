#Array data structure using python
#Author Glory Uget
#REgno 20/csc/041

class ArrayDS:
    def __init__(self):
        # Initialize an empty list to store elements
        self.array = []

    def insert(self, index, value):
        # Insert the value at the specified index in the array
        self.array.insert(index, value)

    def get(self, index):
        # Get and return the value at the specified index in the array
        return self.array[index]

    def remove(self, index):
        # Remove the value at the specified index from the array
        del self.array[index]

    def size(self):
        # Return the number of elements in the array
        return len(self.array)

    def is_empty(self):
        # Check if the array is empty
        return len(self.array) == 0
