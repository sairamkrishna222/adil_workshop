n = int(input()) 
for _ in range(n):
    x = list(map(int,input("").split(" ")))
    a = []
    count = 0
    for i in x:
        if i in a:
            count += 1
        else:
            a.append(i)
    print(count)