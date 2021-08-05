a =[1,22,0,56,0,16,0,63,0,78,0,95]
b = []
print("old list is:", a)
for i in a:
    if i is 0:
        b.append(i)
        a.remove(i)
print("\n New list is:", a+b)