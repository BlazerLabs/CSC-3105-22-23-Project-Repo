/**
 * Class Map data structure task
 * Represents a map data structure.
 * Author: Odey samuel
 * 
 */
class MapDS
{
    private $elements;

    /**
     * Constructor to initialize the map.
     */
    public function __construct()
    {
        $this->elements = [];
    }

    /**
     * Add a key-value pair to the map.
     * @param mixed $key The key.
     * @param mixed $value The value.
     */
    public function put($key, $value)
    {
        $this->elements[$key] = $value;
    }

    /**
     * Get the value associated with a key in the map.
     * @param mixed $key The key.
     * @return mixed|null The value associated with the key, or null if the key is not found.
     */
    public function get($key)
    {
        return $this->elements[$key] ?? null;
    }

    /**
     * Remove a key-value pair from the map.
     * @param mixed $key The key to remove.
     */
    public function remove($key)
    {
        unset($this->elements[$key]);
    }

    /**
     * Check if the map contains a specific key.
     * @param mixed $key The key to check.
     * @return bool True if the key is in the map, false otherwise.
     */
    public function containsKey($key)
    {
        return isset($this->elements[$key]);
    }

    /**
     * Get all keys in the map.
     * @return array An array containing all keys in the map.
     */
    public function keys()
    {
        return array_keys($this->elements);
    }

    /**
     * Get all values in the map.
     * @return array An array containing all values in the map.
     */
    public function values()
    {
        return array_values($this->elements);
    }

    /**
     * Get the size of the map.
     * @return int The number of key-value pairs in the map.
     */
    public function size()
    {
        return count($this->elements);
    }

    /**
     * Check if the map is empty.
     * @return bool True if the map is empty, false otherwise.
     */
    public function isEmpty()
    {
        return empty($this->elements);
    }
}
