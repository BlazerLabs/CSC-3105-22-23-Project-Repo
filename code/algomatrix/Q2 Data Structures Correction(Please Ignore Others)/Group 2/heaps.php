<?php
class MinHeap {
    protected $heap;
    protected $size;

    public function __construct() {
        $this->heap = array();
        $this->size = 0;
    }

    protected function getParentIndex($index) {
        return ($index - 1) / 2;
    }

    protected function getLeftChildIndex($index) {
        return 2 * $index + 1;
    }

    protected function getRightChildIndex($index) {
        return 2 * $index + 2;
    }

    protected function hasParent($index) {
        return $this->getParentIndex($index) >= 0;
    }

    protected function hasLeftChild($index) {
        return $this->getLeftChildIndex($index) < $this->size;
    }

    protected function hasRightChild($index) {
        return $this->getRightChildIndex($index) < $this->size;
    }

    protected function swap($index1, $index2) {
        $temp = $this->heap[$index1];
        $this->heap[$index1] = $this->heap[$index2];
        $this->heap[$index2] = $temp;
    }

    public function insert($value) {
        $this->heap[$this->size] = $value;
        $this->size++;
        $this->heapifyUp();
    }

    protected function heapifyUp() {
        $index = $this->size - 1;
        while ($this->hasParent($index) && $this->heap[$this->getParentIndex($index)] > $this->heap[$index]) {
            $this->swap($this->getParentIndex($index), $index);
            $index = $this->getParentIndex($index);
        }
    }

    public function extractMin() {
        if ($this->size == 0) {
            return null;
        }
        $minValue = $this->heap[0];
        $this->heap[0] = $this->heap[$this->size - 1];
        $this->size--;
        $this->heapifyDown();
        return $minValue;
    }

    protected function heapifyDown() {
        $index = 0;
        while ($this->hasLeftChild($index)) {
            $smallerChildIndex = $this->getLeftChildIndex($index);
            if ($this->hasRightChild($index) && $this->heap[$this->getRightChildIndex($index)] < $this->heap[$smallerChildIndex]) {
                $smallerChildIndex = $this->getRightChildIndex($index);
            }
            if ($this->heap[$index] < $this->heap[$smallerChildIndex]) {
                break;
            } else {
                $this->swap($index, $smallerChildIndex);
            }
            $index = $smallerChildIndex;
        }
    }

    public function display() {
        echo implode(', ', $this->heap) . "\n";
    }
}
