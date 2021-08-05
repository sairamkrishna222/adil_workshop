def Power_rec(m,n):
    if n==0:
        return 1
    else:
        return m* pow(m,n-1)
p = Power_rec(7,2)
print(p)

#the binary search method time complexity of the given problem is
      #O(n)""
