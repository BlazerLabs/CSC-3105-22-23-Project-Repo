class MyArray {
    constructor() {
        this.array = [];
    }

    // Method to get the length of the array
    get length() {
        return this.array.length;
    }

    // Method to get an element at a specific index
    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        } else {
            return undefined;
        }
    }

    // Method to set an element at a specific index
    set(index, value) {
        if (index >= 0 && index < this.array.length) {
            this.array[index] = value;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    // Method to push an element to the end of the array
    push(value) {
        this.array.push(value);
    }

    // Method to pop an element from the end of the array
    pop() {
        return this.array.pop();
    }

    // Method to remove an element at a specific index
    removeAt(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array.splice(index, 1)[0];
        } else {
            return undefined;
        }
    }

    // Method to convert the array to a string
    toString() {
        return this.array.join(', ');
    }
}

// Example usage:
const myArray = new MyArray();

// Add elements to the array
myArray.push(1);
myArray.push(2);
myArray.push(3);

// Print the array length
console.log("Array Length:", myArray.length);

// Print the array
console.log("Array:", myArray.toString());

// Get an element at index 1
console.log("Element at index 1:", myArray.get(1));

// Set an element at index 1
myArray.set(1, 5);
console.log("Array after setting element at index 1:", myArray.toString());

// Remove an element at index 0
console.log("Removed element:", myArray.removeAt(0));
console.log("Array after removing element at index 0:", myArray.toString());

// Pop an element from the end
console.log("Popped element:", myArray.pop());
console.log("Array after popping element from the end:", myArray.toString());

