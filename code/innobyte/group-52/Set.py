# Set Data Strucuture tasks assigned to me - group 52
# Author: Isaac Cletus Unimnake
# RegNo: 20/CSC/030

class Set:
    def __init__(self):
        """Initialize the set."""
        self.elements = []
        
    def add(self, element):
        """Add an element to the set."""
        if element not in self.elements:
            self.elements.append(element)

    def remove(self, element):
        """Remove an element from the set."""
        if element in self.elements:
            self.elements.remove(element)
            
    def contains(self, element):
        """Check if the set contains a specific element."""
        return element in self.elements

    def size(self):
        """Get the size of the set."""
        return len(self.elements)

    def to_list(self):
        """Get all elements in the set as a list."""
        return self.elements

#this section is the example usage part for the above structure:
if __name__ == "__main__":
    # Create a new set
    my_set = Set()

    # Add elements to the set
    my_set.add(1)
    my_set.add(2)
    my_set.add(3)

    # Remove an element from the set
    my_set.remove(2)

    # Check if the set contains a specific element
    print("Set contains 1:", my_set.contains(1))  # True
    print("Set contains 2:", my_set.contains(2))  # False

    # Get the size of the set
    print("Size of set:", my_set.size())  # 2

    # Get all elements in the set
    print("Elements in the set:", my_set.to_list())  # [1, 3]
