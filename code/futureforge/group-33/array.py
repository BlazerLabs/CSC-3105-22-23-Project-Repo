#Section worked on by Udeani Thankgod 20/CSC/124

# Arrays
# In Python, arrays are implemented using lists. Lists are dynamic arrays, 
# meaning they automatically resize themselves when needed. Here's a basic implementation of an array in Python:

class Array:
    def __init__(self):
        self.data = []

    def insert(self, value):
        self.data.append(value)

    def remove(self, value):
        self.data.remove(value)

    def search(self, value):
        return value in self.data

    def access(self, index):
        return self.data[index]

    def length(self):
        return len(self.data)

    def print_array(self):
        print(self.data)

# Example usage
arr = Array()
arr.insert(10)
arr.insert(20)
arr.insert(30)

arr.print_array()  # Output: [10, 20, 30]
print("Length:", arr.length())  # Output: 3
print("Search 20:", arr.search(20))  # Output: True
print("Access element at index 1:", arr.access(1))  # Output: 20
arr.remove(20)
arr.print_array()  # Output: [10, 30]





