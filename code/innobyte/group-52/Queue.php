/**
 * Queue data structure implementation task.
 * Author: Anita ofegobi
 * Regno: 20/CSC/090
 */
class QueueDS
{
    private $queue; // Private property to hold the queue elements
    private $front; // Private property to keep track of the front of the queue
    private $rear;  // Private property to keep track of the rear of the queue

    /**
     * Constructor to initialize the queue.
     */
    public function __construct()
    {
        $this->queue = []; // Initialize the queue as an empty array
        $this->front = -1; // Initialize the front pointer to -1
        $this->rear = -1;  // Initialize the rear pointer to -1
    }

    /**
     * Enqueue an element into the queue.
     * @param mixed $value The value to enqueue.
     */
    public function enqueue($value)
    {
        if ($this->isEmpty()) {
            $this->front = 0; // If the queue is empty, set front to 0
        }
        $this->rear++;                // Increment the rear pointer
        $this->queue[$this->rear] = $value; // Add the value to the rear of the queue
    }

    /**
     * Dequeue the front element from the queue and return it.
     * @return mixed|null The dequeued element, or null if the queue is empty.
     */
    public function dequeue()
    {
        if ($this->isEmpty()) {
            return null; // Return null if the queue is empty
        } else {
            $value = $this->queue[$this->front]; // Get the front element
            unset($this->queue[$this->front]);   // Remove the front element
            $this->front++;                      // Increment the front pointer
            if ($this->front > $this->rear) {    // If front passes rear, reset pointers
                $this->front = -1;
                $this->rear = -1;
            }
            return $value; // Return the dequeued element
        }
    }

    /**
     * Peek at the front element of the queue without removing it.
     * @return mixed|null The front element, or null if the queue is empty.
     */
    public function peek()
    {
        if ($this->isEmpty()) {
            return null; // Return null if the queue is empty
        } else {
            return $this->queue[$this->front]; // Return the front element
        }
    }
  /**
     * Check if the queue is empty.
     * @return bool True if the queue is empty, false otherwise.
     */
    public function isEmpty()
    {
        return $this->front === -1; // Check if the front pointer is -1
    }
}
