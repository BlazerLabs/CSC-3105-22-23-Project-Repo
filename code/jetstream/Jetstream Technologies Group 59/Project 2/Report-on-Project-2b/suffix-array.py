def suffix_array(s):
    suffixes = [(s[i:], i) for i in range(len(s))]
    suffixes.sort(key=lambda x: x[0])
    return [x[1] for x in suffixes]

# Example usage:
s = "banana"
print("Suffix Array of", s, ":", suffix_array(s))
