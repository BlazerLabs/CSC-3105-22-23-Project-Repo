class SegmentTree:
    def __init__(self, arr):
        self.arr = arr
        self.tree = [0] * (4 * len(arr))
        self.build_tree(0, 0, len(arr) - 1)

    def build_tree(self, index, left, right):
        if left == right:
            self.tree[index] = self.arr[left]
            return
        mid = (left + right) // 2
        self.build_tree(2 * index + 1, left, mid)
        self.build_tree(2 * index + 2, mid + 1, right)
        self.tree[index] = self.tree[2 * index + 1] + self.tree[2 * index + 2]

    def query(self, index, left, right, query_left, query_right):
        if query_left <= left and query_right >= right:
            return self.tree[index]
        if query_right < left or query_left > right:
            return 0
        mid = (left + right) // 2
        return self.query(2 * index + 1, left, mid, query_left, query_right) + \
               self.query(2 * index + 2, mid + 1, right, query_left, query_right)

    def update(self, index, left, right, update_index, new_value):
        if left == right == update_index:
            self.tree[index] = new_value
            return
        if update_index < left or update_index > right:
            return
        mid = (left + right) // 2
        self.update(2 * index + 1, left, mid, update_index, new_value)
        self.update(2 * index + 2, mid + 1, right, update_index, new_value)
        self.tree[index] = self.tree[2 * index + 1] + self.tree[2 * index + 2]
