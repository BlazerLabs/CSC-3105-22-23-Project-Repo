// Stack Data Structure task implementation in JavaScript
// Author: Nkom Nkom Ibar
// 20/CSC/081

/**
 * Stack data structure implementation.
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

}
