//Section worked on by Irek Jenjoe Ben 20/CSC/066

// Arrays
// Arrays are a fundamental data structure used to store a collection of elements. 
// In JavaScript, arrays are dynamic and can hold elements of any type. 
// Each element in an array has a numeric index, starting from 0.

class Array {
    constructor() {
        this.data = [];
    }

    // Insert an element at the end of the array
    insert(item) {
        this.data.push(item);
    }

    // Remove an element from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data.splice(index, 1)[0];
    }

    // Access an element at a specific index
    access(index) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        return this.data[index];
    }

    // Update an element at a specific index
    update(index, newValue) {
        if (index < 0 || index >= this.data.length) {
            return "Index out of bounds";
        }
        this.data[index] = newValue;
    }

    // Get the current length of the array
    length() {
        return this.data.length;
    }

    // Print the array
    print() {
        console.log(this.data.join(', '));
    }
}

// Example usage
const array = new Array();
array.insert(10);
array.insert(20);
array.insert(30);

array.print(); // Output: 10, 20, 30
console.log("Access element at index 1:", array.access(1)); // Output: 20
array.update(1, 50);
array.print(); // Output: 10, 50, 30
console.log("Remove element at index 0:", array.removeAt(0)); // Output: 10
array.print(); // Output: 50, 30





