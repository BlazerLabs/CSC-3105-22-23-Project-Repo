
/**
 * Class representing a sparse matrix data structure task .
 * Author Opi Peter
 * 20/csc/062
 */
class SparseMatrixDS {
    /**
     * Create a sparse matrix with the specified number of rows and columns.
     * @param {number} rows - The number of rows in the matrix.
     * @param {number} cols - The number of columns in the matrix.
     */
    constructor(rows, cols) {
        /**
         * Array to store non-zero values.
         * @type {Array.<*>}
         */
        this.values = [];

        /**
         * Array to store column indices of non-zero values.
         * @type {Array.<number>}
         */
        this.rowIndices = [];

        /**
         * Array to store row pointers, initialized to zeros.
         * @type {Array.<number>}
         */
        this.rowPointers = Array(rows + 1).fill(0);

        // Set the last element of row pointers to the total number of non-zero elements
        this.rowPointers[rows] = 0;
    }

    /**
     * Set a value at the specified row and column indices.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @param {*} value - The value to set.
     */
    setValue(row, col, value) {
        // Store non-zero value along with its column index
        this.values.push(value);
        this.rowIndices.push(col);

        // Increment row pointers for subsequent rows
        for (let i = row + 1; i < this.rowPointers.length; i++) {
            this.rowPointers[i]++;
        }
    }

    /**
     * Get the value at the specified row and column indices.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @return {*} The value at the specified indices, or null if the element is zero.
     */
    getValue(row, col) {
        // Find the range of non-zero elements in the row
        const start = this.rowPointers[row];
        const end = this.rowPointers[row + 1];

        // Search for the column index within the range
        for (let i = start; i < end; i++) {
            if (this.rowIndices[i] === col) {
                return this.values[i]; // Return the value if found
            }
        }

        return null; // Return null if the element is zero
    }
}
