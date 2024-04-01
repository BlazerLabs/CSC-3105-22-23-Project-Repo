
class Array:
    def __init__(self, size):
        self.size = size
        self.array = [None] * size

    def __getitem__(self, index):
        if 0 <= index < self.size:
            return self.array[index]
        else:
            raise IndexError("Index out of range")

    def __setitem__(self, index, value):
        if 0 <= index < self.size:
            self.array[index] = value
        else:
            raise IndexError("Index out of range")

    def __len__(self):
        return self.size