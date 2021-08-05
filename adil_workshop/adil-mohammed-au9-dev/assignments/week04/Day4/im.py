def power(x,n):
    if (n==0):
        return 1
    elif (n%2==0):
        res = x* pow(x,n/2)
        return res
    else:
        return x* pow(x,n-1)
p = power(7,2)
print(p)

## the given problem is iterative version in this the we use for loop where 
# it is checking each iterative and dividing the  n if the value is even and 
#the time complexity is O(logn)