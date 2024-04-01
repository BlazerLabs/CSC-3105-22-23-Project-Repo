class BinaryTree {
    TreeNode root;

    public BinaryTree() {
        root = null;
    }

    // Method to insert a value into the binary tree
    public void insert(int val) {
        root = insertRecursive(root, val);
    }

    private TreeNode insertRecursive(TreeNode node, int val) {
        if (node == null) {
            return new TreeNode(val);
        }

        if (val < node.val) {
            node.left = insertRecursive(node.left, val);
        } else if (val > node.val) {
            node.right = insertRecursive(node.right, val);
        }

        return node;
    }

    // Method to perform an inorder traversal of the binary tree
    public void inorderTraversal() {
        inorderTraversalRecursive(root);
    }

    private void inorderTraversalRecursive(TreeNode node) {
        if (node != null) {
            inorderTraversalRecursive(node.left);
            System.out.print(node.val + " ");
            inorderTraversalRecursive(node.right);
        }
    }
}
