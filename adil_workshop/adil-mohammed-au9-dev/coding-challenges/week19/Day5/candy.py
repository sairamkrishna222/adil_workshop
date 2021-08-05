def distribut_candies(A):
    candy_left = [1]*len(A)
    candy_right = [1]*len(A)
    for left in range(len(A)):
        if left>0:
            if A[left]>A[left-1]:
                candy_left[left]= candy_left[left-1]+1
    for right in range(len(A)-1,-1,-1):
        if right < len(A)-1:
            if A[right]>A[right+1]:
                candy_right[right] = candy_right[right+1]+1
    for k in range (len(A)):
        candy_right[k]= max(candy_left[k],candy_right[k])
    return sum(candy_right)

A = [1,0,2]
print(distribut_candies(A))
