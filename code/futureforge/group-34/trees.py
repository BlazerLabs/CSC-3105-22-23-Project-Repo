#CEO's Work 20/CSC/119

# A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node, and every node (except the root) is 
# connected by a directed edge from exactly one other node. Trees are used to represent hierarchical relationships between data elements.

class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        """Inserts a key into the binary search tree."""
        new_node = TreeNode(key)
        if not self.root:
            self.root = new_node
        else:
            self._insert_recursive(self.root, new_node)

    def _insert_recursive(self, current, new_node):
        """Helper method to recursively insert a new node."""
        if new_node.key < current.key:
            if not current.left:
                current.left = new_node
            else:
                self._insert_recursive(current.left, new_node)
        else:
            if not current.right:
                current.right = new_node
            else:
                self._insert_recursive(current.right, new_node)

    def search(self, key):
        """Searches for a key in the binary search tree."""
        return self._search_recursive(self.root, key)

    def _search_recursive(self, current, key):
        """Helper method to recursively search for a key."""
        if not current:
            return False
        elif current.key == key:
            return True
        elif key < current.key:
            return self._search_recursive(current.left, key)
        else:
            return self._search_recursive(current.right, key)

# Example usage of BinarySearchTree
bst = BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

print(bst.search(7))  # Output: True
print(bst.search(20))  # Output: False