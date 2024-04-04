import heapq

class Heap:
    def __init__(self):
        self.heap = []

    def insert(self, item):
        heapq.heappush(self.heap, item)

    def extract_min(self):
        return heapq.heappop(self.heap)

    def get_min(self):
        return self.heap[0]
