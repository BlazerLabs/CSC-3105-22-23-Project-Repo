<?php
class MyArray {
    protected $data;
    protected $length;

    public function __construct() {
        $this->data = [];
        $this->length = 0;
    }

    public function get($index) {
        if ($this->isValidIndex($index)) {
            return $this->data[$index];
        }
        return null;
    }

    public function push($item) {
        $this->data[$this->length] = $item;
        $this->length++;
    }

    public function pop() {
        if ($this->length === 0) {
            return null;
        }
        $lastItem = $this->data[$this->length - 1];
        unset($this->data[$this->length - 1]);
        $this->length--;
        return $lastItem;
    }

    public function delete($index) {
        if ($this->isValidIndex($index)) {
            $deletedItem = $this->data[$index];
            for ($i = $index; $i < $this->length - 1; $i++) {
                $this->data[$i] = $this->data[$i + 1];
            }
            unset($this->data[$this->length - 1]);
            $this->length--;
            return $deletedItem;
        }
        return null;
    }

    public function insert($index, $item) {
        if ($this->isValidIndex($index)) {
            for ($i = $this->length; $i > $index; $i--) {
                $this->data[$i] = $this->data[$i - 1];
            }
            $this->data[$index] = $item;
            $this->length++;
        }
    }

    public function display() {
        echo '[' . implode(', ', $this->data) . "]\n";
    }

    protected function isValidIndex($index) {
        return $index >= 0 && $index < $this->length;
    }
}
