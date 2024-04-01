
/**
 * Class representing a set data structure.
 * Code Author: Uget Glory Egwu
 * RegNo: 20/csc/041
 */
class SetDS {
    /**
     * Create a new SetDS instance.
     */
    constructor() {
        /**
         * Array to store elements of the set.
         * @type {Array.<*>}
         */
        this.elements = [];
    }

    /**
     * Add an element to the set.
     * @param {*} element - The element to add.
     */
    add(element) {
        if (!this.contains(element)) {
            this.elements.push(element);
        }
    }

    /**
     * Remove an element from the set.
     * @param {*} element - The element to remove.
     */
    remove(element) {
        const index = this.elements.indexOf(element);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }

    /**
     * Check if the set contains a specific element.
     * @param {*} element - The element to check.
     * @returns {boolean} - True if the element is in the set, false otherwise.
     */
    contains(element) {
        return this.elements.includes(element);
    }

    /**
     * Get the size of the set.
     * @returns {number} - The number of elements in the set.
     */
    size() {
        return this.elements.length;
    }

    /**
     * Get all elements in the set.
     * @returns {Array.<*>} - An array containing all elements in the set.
     */
    toArray() {
        return [...this.elements];
    }
}
