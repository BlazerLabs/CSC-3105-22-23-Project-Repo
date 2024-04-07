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
