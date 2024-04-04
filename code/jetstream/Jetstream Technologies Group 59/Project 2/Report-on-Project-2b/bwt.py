def bwt(s):
    rotations = [s[i:] + s[:i] for i in range(len(s))]
    rotations.sort()
    return ''.join(r[-1] for r in rotations), rotations.index(s)

# Example usage:
s = "banana"
bwt_str, idx = bwt(s)
print("Burrows-Wheeler Transform of", s, ":", bwt_str)
print("Index of original string in BWT:", idx)
