def pattern(n):
    k = 1
    for i in range (1,n+1):
        for j in range (1,n+1):
            if i%2==0:
                print (k-1, end= '')
                k = k-1
            else:
                print(k,end = '')
                k= k+1
        print()
        k = k+n
n = int(input("enter n value:"))
pattern(n)