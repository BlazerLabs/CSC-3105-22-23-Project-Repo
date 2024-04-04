// Array Data Structure task done in Java
//Author: Sylvia Chidiebere
//Regno: 20/csc/049
public class ArrayDS {
    private int[] array;
    private int size;
    
    public ArrayDS(int initialSize) {
        // Initialize the array with the given initial size and set size to 0
        array = new int[initialSize];
        size = 0;
    }
    
    public void addElement(int value) {
        // Check if there's enough capacity to add the value
        if (size < array.length) {
            // If there's enough space, directly add the value
            array[size++] = value;
        } else {
            // If the array is full, resize it and then add the value
            int[] newArray = new int[array.length * 2];
            // Copy elements from the old array to the new one
            for (int i = 0; i < array.length; i++) {
                newArray[i] = array[i];
            }
            // Update the reference to the new array and add the value
            array = newArray;
            array[size++] = value;
        }
    }
    
    public int getElement(int index) {
        // Check if the index is within bounds
        if (index < size) {
            // If so, retrieve the value at the given index
            return array[index];
        } else {
            // If index is out of bounds, throw an exception
            throw new IndexOutOfBoundsException("Index " + index + " is out of bounds.");
        }
    }
    public int getCurrentSize() {
        // Return the current size of the array
        return size;
    }
}

