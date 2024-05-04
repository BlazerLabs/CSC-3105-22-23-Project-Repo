  //Section worked on by Adikwu Mary 20/CSC/140

//   Trees 

//   A tree is a hierarchical data structure that consists of nodes connected by edges. 
//   Each node has a value and a list of references to its child nodes. 
//   The topmost node in the tree is called the root node. Trees are used to represent 
//   hierarchical relationships like family trees, organization charts, file systems, etc.


// Binary Tree implementation using classes

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform inorder traversal of the tree
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // Perform preorder traversal of the tree
    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Perform postorder traversal of the tree
    postorderTraversal(node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder traversal:");
tree.inorderTraversal(tree.root);

console.log("Preorder traversal:");
tree.preorderTraversal(tree.root);

console.log("Postorder traversal:");
tree.postorderTraversal(tree.root);