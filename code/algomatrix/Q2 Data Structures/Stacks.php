#Q2 (b,v)

#Group 2
#developing stack data structure




<?php
class Stack {
    private $stack;

    public function __construct() {
        $this->stack = array();
    }

    public function push($item) {
        array_push($this->stack, $item);
    }

    public function pop() {
        if ($this->isEmpty()) {
            return null;
        }
        return array_pop($this->stack);
    }

    public function isEmpty() {
        return empty($this->stack);
    }

    public function peek() {
        if ($this->isEmpty()) {
            return null;
        }
        return end($this->stack);
    }

    public function display() {
        echo "Stack: ";
        if ($this->isEmpty()) {
            echo "Empty";
        } else {
            foreach ($this->stack as $item) {
                echo $item . " ";
            }
        }
        echo "\n";
    }
}
