public class MyArray {
    private int[] array;
    private int size;
    
    public MyArray(int capacity) {
        array = new int[capacity];
        size = 0;
    }
    
    public void add(int value) {
        if (size < array.length) {
            array[size++] = value;
        } else {
            // Resize the array and then add the value
            int[] newArray = new int[array.length * 2];
            for (int i = 0; i < array.length; i++) {
                newArray[i] = array[i];
            }
            array = newArray;
            array[size++] = value;
        }
    }
    
    public int get(int index) {
        if (index < size) {
            return array[index];
        } else {
            throw new IndexOutOfBoundsException();
        }
    }
    
    public int size() {
        return size;
    }
}
