
# this is tree data structure task assigned to me:
# Nduoyo Gift
# 20/CSC/249
class BinaryTree:
    class TreeNode:
        def __init__(self, key):
            # Initialize a tree node with a key, left, and right child as None
            self.key = key
            self.left = None
            self.right = None

    def __init__(self):
        # Initialize the root of the binary tree as None
        self.root = None

    def insert(self, key):
        # Insert a key into the binary tree
        if self.root is None:
            # If the tree is empty, set the root as the new node
            self.root = self.TreeNode(key)
        else:
            # Otherwise, call the recursive insert method starting from the root
            self._insert_recursive(self.root, key)

    def _insert_recursive(self, node, key):
        # Recursive helper method to insert a key into the binary tree
        if key < node.key:
            # If the key is less than the current node's key, traverse left
            if node.left is None:
                # If the left child is None, create a new node and set it as the left child
                node.left = self.TreeNode(key)
            else:
                # Otherwise, recursively call insert on the left subtree
                self._insert_recursive(node.left, key)
        elif key > node.key:
            # If the key is greater than the current node's key, traverse right
            if node.right is None:
                # If the right child is None, create a new node and set it as the right child
                node.right = self.TreeNode(key)
            else:
                # Otherwise, recursively call insert on the right subtree
                self._insert_recursive(node.right, key)
        # If key already exists in the tree, do nothing

    def search(self, key):
        # Search for a key in the binary tree
        return self._search_recursive(self.root, key)

    def _search_recursive(self, node, key):
        # Recursive helper method to search for a key in the binary tree
        if node is None or node.key == key:
            # If the current node is None or contains the key, return the node
            return node
        elif key < node.key:
            # If the key is less than the current node's key, search in the left subtree
            return self._search_recursive(node.left, key)
        else:
            # If the key is greater than the current node's key, search in the right subtree
            return self._search_recursive(node.right, key)
