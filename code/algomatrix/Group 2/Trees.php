<?php
class TreeNode {
    public $data;
    public $left;
    public $right;

    public function __construct($data) {
        $this->data = $data;
        $this->left = null;
        $this->right = null;
    }
}

class BinaryTree {
    public $root;

    public function __construct() {
        $this->root = null;
    }

    public function insert($data) {
        $newNode = new TreeNode($data);
        if ($this->root === null) {
            $this->root = $newNode;
        } else {
            $this->_insertRecursively($this->root, $newNode);
        }
    }

    private function _insertRecursively(&$node, $newNode) {
        if ($node === null) {
            $node = $newNode;
            return;
        }
        if ($newNode->data < $node->data) {
            $this->_insertRecursively($node->left, $newNode);
        } else {
            $this->_insertRecursively($node->right, $newNode);
        }
    }

    public function search($data) {
        return $this->_searchRecursively($this->root, $data);
    }

    private function _searchRecursively($node, $data) {
        if ($node === null || $node->data === $data) {
            return $node;
        }
        if ($data < $node->data) {
            return $this->_searchRecursively($node->left, $data);
        }
        return $this->_searchRecursively($node->right, $data);
    }

    public function traverseInOrder() {
        $result = [];
        $this->_traverseInOrderRecursively($this->root, $result);
        return $result;
    }

    private function _traverseInOrderRecursively($node, &$result) {
        if ($node !== null) {
            $this->_traverseInOrderRecursively($node->left, $result);
            $result[] = $node->data;
            $this->_traverseInOrderRecursively($node->right, $result);
        }
    }
}
