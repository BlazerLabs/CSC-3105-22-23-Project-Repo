// Binary Tree Data structure implemented by 20/csc/169

// Define the TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define the BinaryTree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a new value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a node into the tree
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to find the minimum value node in the tree
    findMinNode(node) {
        if (!node.left) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    // Method to remove a node from the tree
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    // Helper method to recursively remove a node from the tree
    removeNode(node, key) {
        if (!node) {
            return null;
        }

        if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // Case 1: No child
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            // Case 2: One child
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            // Case 3: Two children
            const tempNode = this.findMinNode(node.right);
            node.value = tempNode.value;
            node.right = this.removeNode(node.right, tempNode.value);
            return node;
        }
    }

    // Method to print the tree inorder (left, root, right)
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

module.exports = BinaryTree;