A = int(input("Enter a number"))
for i  in range (0, A):
    for j in range (0,A-i-1):
        print(end="")
    for j in range (0, i+1):
        print("*", end="")
    print()
    