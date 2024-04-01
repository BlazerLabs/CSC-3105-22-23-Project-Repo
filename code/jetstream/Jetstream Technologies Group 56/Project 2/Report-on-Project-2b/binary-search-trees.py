class BSTNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

    def insert(self, key):
        if key < self.key:
            if self.left is None:
                self.left = BSTNode(key)
            else:
                self.left.insert(key)
        elif key > self.key:
            if self.right is None:
                self.right = BSTNode(key)
            else:
                self.right.insert(key)

    def search(self, key):
        if self.key == key:
            return True
        elif key < self.key:
            if self.left is None:
                return False
            else:
                return self.left.search(key)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(key)
