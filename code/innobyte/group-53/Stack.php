/**
 * Stack data structure task implementation.
 * Glory Ogar
 * 20/CSC/213
 */
class StackDS
{
    private $stack; // Private property to hold the stack elements
    private $top;   // Private property to keep track of the top of the stack

    /**
     * Constructor to initialize the stack.
     */
    public function __construct()
    {
        $this->stack = []; // Initialize the stack as an empty array
        $this->top = -1;   // Initialize the top pointer to -1 (empty stack)
    }

    /**
     * Push an element onto the stack.
     * @param mixed $value The value to push onto the stack.
     */
    public function push($value)
    {
        $this->top++;             // Increment the top pointer
        $this->stack[$this->top] = $value; // Add the value to the top of the stack
    }

    /**
     * Pop the top element from the stack and return it.
     * @return mixed|null The popped element, or null if the stack is empty.
     */
    public function pop()
    {
        if ($this->isEmpty()) {
            return null; // Return null if the stack is empty
        } else {
            $value = $this->stack[$this->top]; // Get the top element
            unset($this->stack[$this->top]);   // Remove the top element
            $this->top--;                      // Decrement the top pointer
            return $value;                     // Return the popped element
        }
    }

    /**
     * Peek at the top element of the stack without removing it.
     * @return mixed|null The top element, or null if the stack is empty.
     */
    public function peek()
    {
        if ($this->isEmpty()) {
            return null; // Return null if the stack is empty
        } else {
            return $this->stack[$this->top]; // Return the top element
        }
    }

    /**
     * Check if the stack is empty.
     * @return bool True if the stack is empty, false otherwise.
     */
    public function isEmpty()
    {
        return $this->top === -1; // Check if the top pointer is -1
    }
}
