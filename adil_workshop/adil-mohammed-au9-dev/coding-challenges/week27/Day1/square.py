N = int(input("enter a number:"))
s = 0
for i in range(1,N+1):
    s+= pow(i,2)
print("The sum of square number:", N,"is:", s)
