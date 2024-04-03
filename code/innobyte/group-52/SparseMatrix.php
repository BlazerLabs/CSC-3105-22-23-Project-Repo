
<?php

/**
 * Class SparseMatrix
 * Represents a sparse matrix using Compressed Sparse Row (CSR) format.
 * Contributor - Atiangbende Celestine
 * Regno - 20/CSC/153
 */
class SparseMatrixDS
{
    private $values; // Array to store non-zero values
    private $rowIndices; // Array to store row indices
    private $rowPointers; // Array to store row pointers

    /**
     * Constructor to initialize the sparse matrix.
     * @param int $rows The number of rows in the matrix.
     * @param int $cols The number of columns in the matrix.
     */
    public function __construct($rows, $cols)
    {
        $this->values = [];
        $this->rowIndices = [];
        $this->rowPointers = array_fill(0, $rows + 1, 0); // Initialize row pointers to zero

        // Set the last element of row pointers to the total number of non-zero elements
        $this->rowPointers[$rows] = 0;
    }

    /**
     * Set a value at the specified row and column indices.
     * @param int $row The row index.
     * @param int $col The column index.
     * @param mixed $value The value to set.
     */
    public function setValue($row, $col, $value)
    {
        // Store non-zero value along with its row index
        $this->values[] = $value;
        $this->rowIndices[] = $col;

        // Increment row pointers for subsequent rows
        for ($i = $row + 1; $i < count($this->rowPointers); $i++) {
            $this->rowPointers[$i]++;
        }
    }

    /**
     * Get the value at the specified row and column indices.
     * @param int $row The row index.
     * @param int $col The column index.
     * @return mixed|null The value at the specified indices, or null if the element is zero.
     */
    public function getValue($row, $col)
    {
        // Find the range of non-zero elements in the row
        $start = $this->rowPointers[$row];
        $end = $this->rowPointers[$row + 1];

        // Search for the column index within the range
        for ($i = $start; $i < $end; $i++) {
            if ($this->rowIndices[$i] === $col) {
                return $this->values[$i]; // Return the value if found
            }
        }

        return null; // Return null if the element is zero
    }
}
