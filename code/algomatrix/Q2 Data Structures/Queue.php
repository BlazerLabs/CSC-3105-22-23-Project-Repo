class Queue {
    private $queue;

    public function __construct() {
        $this->queue = array();
    }

    public function enqueue($item) {
        array_push($this->queue, $item);
    }

    public function dequeue() {
        if ($this->isEmpty()) {
            return null;
        }
        return array_shift($this->queue);
    }

    public function isEmpty() {
        return empty($this->queue);
    }

    public function peek() {
        if ($this->isEmpty()) {
            return null;
        }
        return $this->queue[0];
    }

    public function display() {
        echo "Queue: ";
        if ($this->isEmpty()) {
            echo "Empty";
        } else {
            foreach ($this->queue as $item) {
                echo $item . " ";
            }
        }
        echo "\n";
    }
}
