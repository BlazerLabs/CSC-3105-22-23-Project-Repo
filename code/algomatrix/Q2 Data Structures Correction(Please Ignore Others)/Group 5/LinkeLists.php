<?php
class Node {
    public $data;
    public $next;

    public function __construct($data) {
        $this->data = $data;
        $this->next = null;
    }
}

class LinkedList {
    public $head;

    public function __construct() {
        $this->head = null;
    }

    public function insert($data) {
        $newNode = new Node($data);
        if ($this->head === null) {
            $this->head = $newNode;
        } else {
            $current = $this->head;
            while ($current->next !== null) {
                $current = $current->next;
            }
            $current->next = $newNode;
        }
    }

    public function delete($data) {
        if ($this->head === null) {
            return;
        }
        if ($this->head->data === $data) {
            $this->head = $this->head->next;
            return;
        }
        $current = $this->head;
        while ($current->next !== null) {
            if ($current->next->data === $data) {
                $current->next = $current->next->next;
                return;
            }
            $current = $current->next;
        }
    }

    public function display() {
        $current = $this->head;
        while ($current !== null) {
            echo $current->data . " -> ";
            $current = $current->next;
        }
        echo "null\n";
    }
}
