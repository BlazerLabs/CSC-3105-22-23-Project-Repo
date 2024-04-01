class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Example of creating a binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)