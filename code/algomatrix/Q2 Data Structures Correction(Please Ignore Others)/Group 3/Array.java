public class Main {
    public static void main(String[] args) {
        // Creating an array of integers
        int[] arr = new int[5];

        // Inserting elements into the array
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        arr[4] = 5;

        // Accessing elements of the array
        System.out.println("Element at index 2: " + arr[2]);  // Output: 3

        // Iterating through the array
        System.out.print("Array elements: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();  // Output: Array elements: 1 2 3 4 5
    }
}