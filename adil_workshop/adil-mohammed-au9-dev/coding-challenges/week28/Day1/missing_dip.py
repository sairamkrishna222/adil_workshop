from math import log
 
 
def log2(x, base):
    return int(log(x) // log(base))
 
# Function to find the missing number and duplicate element
# using XOR operator in a list of size n and range of
# elements between [1 to n]
def findMissingAndDuplicate(A, n):
 
    # take XOR of all list elements from index [0 to n-1]
    # and all numbers in range [1 to n]
    res = n
    for i in range(n):
        res = res ^ A[i] ^ i
 
    # x, y stores the duplicate element and missing number
    x = y = 0
 
    # res stores (x ^ y)
 
    # find position of the rightmost set bit in res
    k = log2(res & -res, 2)
 
    # split the list into two sublists
    for i in range(len(A)):
        # list elements that have k'th bit 1
        if (A[i] & (1 << k)) == 1:
            x = x ^ A[i]
        # list elements that have k'th bit 0
        else:
            y = y ^ A[i]
 
    # split the range [1-n] into two sub-range
    for i in range(1, n + 1):
        # number i have k'th bit 1
        if (i & (1 << k)) == 1:
            x = x ^ i
        # number i have k'th bit 0
        else:
            y = y ^ i
 
    # linear search for missing element
    print("Duplicate and missing elements are ", end='')
    if x in A:
        print(x, "and", y)
    else:
        print(y, "and", x)
 
 
if __name__ == '__main__':
 
    A = [4, 3, 6, 5, 2, 4]
    n = 6    # size of the list is n
 
    findMissingAndDuplicate(A, n)