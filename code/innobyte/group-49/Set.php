<?php
// Set Data Structure Task for Group 49
// Name: Precious Eyo
// RegNo: 20/csc/181
/**
 * Class set
 * Represents a set data structure.
 */
class SetDS
{
    private $elements;

    /**
     * Constructor to initialize the set.
     */
    public function __construct()
    {
        $this->elements = [];
    }

    /**
     * Add an element to the set.
     * @param mixed $element The element to add.
     */
    public function add($element)
    {
        if (!$this->contains($element)) {
            $this->elements[] = $element;
        }
    }

    /**
     * Remove an element from the set.
     * @param mixed $element The element to remove.
     */
    public function remove($element)
    {
        $index = array_search($element, $this->elements);
        if ($index !== false) {
            unset($this->elements[$index]);
        }
    }

    /**
     * Check if the set contains a specific element.
     * @param mixed $element The element to check.
     * @return bool True if the element is in the set, false otherwise.
     */
    public function contains($element)
    {
        return in_array($element, $this->elements);
    }

    /**
     * Get the size of the set.
     * @return int The number of elements in the set.
     */
    public function size()
    {
        return count($this->elements);
    }

    /**
     * Get all elements in the set.
     * @return array An array containing all elements in the set.
     */
    public function toArray()
    {
        return $this->elements;
    }
}
