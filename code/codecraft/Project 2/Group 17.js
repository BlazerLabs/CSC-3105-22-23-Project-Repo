class Node {
    constructor(value) {
        this.value = value; // Represents the value stored in the node
        this.left = null;   // Pointer to the left child node
        this.right = null;  // Pointer to the right child node
    }
}

class BinaryTree {
    constructor() {
        this.root = null; // Represents the root node of the binary tree
    }

    // Method to insert a new node into the binary tree
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode; // If tree is empty, new node becomes the root
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Recursive helper method to insert a node into the binary tree
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode; // If value is less than current node, go left
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode; // If value is greater than or equal to current node, go right
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Traversal Methods

    // Method to perform inorder traversal of the binary tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);   // Visit left subtree
            console.log(node.value);   // Visit current node
            this.inorder(node.right);  // Visit right subtree
        }
    }

    // Method to perform preorder traversal of the binary tree
    preorder(node) {
        if (node !== null) {
            console.log(node.value);   // Visit current node
            this.preorder(node.left);  // Visit left subtree
            this.preorder(node.right); // Visit right subtree
        }
    }

    // Method to perform postorder traversal of the binary tree
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);  // Visit left subtree
            this.postorder(node.right); // Visit right subtree
            console.log(node.value);    // Visit current node
        }
    }
}

// Example usage

const tree = new BinaryTree();

//adding elements to the binary tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

//performing different traversals on the binary tree

// Inorder traversal
console.log("Inorder traversal:");
tree.inorder(tree.root);

// Preorder traversal
console.log("\nPreorder traversal:");
tree.preorder(tree.root);

// Postorder traversal
console.log("\nPostorder traversal:");
tree.postorder(tree.root);


/*
Group 17:
20/CSC/024
20/CSC/234
*/
