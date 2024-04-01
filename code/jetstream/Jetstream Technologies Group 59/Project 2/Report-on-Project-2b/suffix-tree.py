class Node:
    def __init__(self):
        self.children = {}
        self.start = None
        self.end = None

def suffix_tree(s):
    root = Node()
    for i in range(len(s)):
        current = root
        for j in range(i, len(s)):
            if s[j] not in current.children:
                current.children[s[j]] = Node()
            current = current.children[s[j]]
            current.start = i if current.start is None else current.start
            current.end = j
    return root

# Example usage:
s = "banana"
root = suffix_tree(s)
# Sample usage to traverse the suffix tree
# Note: Traversal code not provided here as it can be complex
