def sum_of(n):
    if n == 1:
        return 1
    else:
        return sum_of(n-1)+n
n = int(input("enter the number:"))
result = sum_of(n)
print("sum of ",n,"is", result)
