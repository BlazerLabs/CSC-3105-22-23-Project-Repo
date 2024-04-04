/**
 * Graph Data Structure task
 * Represents an undirected graph using adjacency list representation.
 *Arikpo Possible
 *22/D/CSC/002
 */

class GraphDS
{
    private $adjacencyList; // Array to store adjacency lists for each vertex

    /**
     * Constructor to initialize the graph.
     */
    public function __construct()
    {
        $this->adjacencyList = [];
    }

    /**
     * Add a vertex to the graph.
     * @param mixed $vertex The vertex to add.
     */
    public function addVertex($vertex)
    {
        $this->adjacencyList[$vertex] = [];
    }

    /**
     * Add an undirected edge between two vertices.
     * @param mixed $vertex1 The first vertex.
     * @param mixed $vertex2 The second vertex.
     */
    public function addEdge($vertex1, $vertex2)
    {
        // Add vertex2 to the adjacency list of vertex1 and vice versa
        $this->adjacencyList[$vertex1][] = $vertex2;
        $this->adjacencyList[$vertex2][] = $vertex1;
    }

    /**
     * Check if there is an edge between two vertices.
     * @param mixed $vertex1 The first vertex.
     * @param mixed $vertex2 The second vertex.
     * @return bool True if there is an edge between the vertices, false otherwise.
     */
    public function hasEdge($vertex1, $vertex2)
    {
        return in_array($vertex2, $this->adjacencyList[$vertex1]);
    }

    /**
     * Get the neighbors of a vertex.
     * @param mixed $vertex The vertex to get neighbors for.
     * @return array An array of neighbors of the vertex.
     */
    public function getNeighbors($vertex)
    {
        return $this->adjacencyList[$vertex];
    }
}
