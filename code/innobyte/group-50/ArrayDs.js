
/**
 * Simple array-based data structure.
 * @class
 * @classdesc Represents a basic data structure utilizing an array.
 * @author isaac matthew
 * @regno 20/csc/074
 */
class ArrayDataStructure {
    constructor() {
        // Initialize an empty array to store elements
        this.data = [];
    }

    /**
     * Appends a new element to the array.
     * @param {*} item - The item to be appended.
     */
    append(item) {
        this.data.push(item);
    }

    /**
     * Retrieves the element at the specified index.
     * @param {number} index - The index of the element to retrieve.
     * @returns {*} The element at the specified index, or undefined if the index is out of bounds.
     */
    access(index) {
        if (index < 0 || index >= this.data.length) {
            return undefined;
        }
        return this.data[index];
    }

    /**
     * Removes the element at the specified index.
     * @param {number} index - The index of the element to remove.
     * @returns {*} The removed element, or undefined if the index is out of bounds.
     */
    erase(index) {
        if (index < 0 || index >= this.data.length) {
            return undefined;
        }
        return this.data.splice(index, 1)[0];
    }

    /**
     * Returns the length of the array.
     * @returns {number} The length of the array.
     */
    size() {
        return this.data.length;
    }
}
