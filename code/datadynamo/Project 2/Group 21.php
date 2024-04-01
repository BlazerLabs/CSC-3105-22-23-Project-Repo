class Stack {
    private $stack;
    private $top;
    
    public function __construct() {
        $this->stack = array();
        $this->top = -1;
    }
    
    public function push($item) {
        $this->stack[++$this->top] = $item;
    }
    
    public function pop() {
        if ($this->isEmpty()) {
            return null;
        }
        return $this->stack[$this->top--];
    }
    
    public function peek() {
        if ($this->isEmpty()) {
            return null;
        }
        return $this->stack[$this->top];
    }
    
    public function isEmpty() {
        return $this->top == -1;
    }
}
