


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get element at index
    get(index) {
        return this.data[index];
    }

    // Add element at the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Remove last element
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Delete element at index
    delete(index) {
        if (this.length === 0 || index >= this.length || index < 0) return undefined;
        const deletedItem = this.data[index];
        this._shiftItems(index);
        return deletedItem;
    }

    // Shift items to the left after deletion
    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    // Insert element at index
    insert(index, item) {
        if (index < 0 || index > this.length) return undefined;
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.length;
    }

    // Print the array
    print() {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.data[i]);
        }
        console.log(result);
    }
}