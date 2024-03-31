/**
 * Data structure implemented as an array.
 * @class 
 * @classdesc Represents a simple array data structure.
 * @author Festus Olem 20-csc-108
 * @author Dennis 20-csc-130
 */
class ArrayDataStructure {
    constructor() {
        // Initialize an empty array to store elements
        this.elements = [];
    }

    /**
     * Add a new element to the array.
     * @param {*} element - The element to be added.
     */
    add(element) {
        this.elements.push(element);
    }

    /**
     * Get the element at a specified index.
     * @param {number} index - The index of the element to retrieve.
     * @returns {*} The element at the specified index, or undefined if index is out of bounds.
     */
    get(index) {
        if (index < 0 || index >= this.elements.length) {
            return undefined;
        }
        return this.elements[index];
    }

    /**
     * Remove the element at a specified index.
     * @param {number} index - The index of the element to remove.
     * @returns {*} The removed element, or undefined if index is out of bounds.
     */
    remove(index) {
        if (index < 0 || index >= this.elements.length) {
            return undefined;
        }
        return this.elements.splice(index, 1)[0];
    }

    /**
     * Get the length of the array.
     * @returns {number} The length of the array.
     */
    size() {
        return this.elements.length;
    }
}
