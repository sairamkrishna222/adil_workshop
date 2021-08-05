def rev_str(n):
    if len(n)==0:
        return n 
    else:  
        return rev_str(n[1:])+n[0]
n = input("enter the string: ")
result = rev_str(n)
print("Reverse string is :", result)
print(result)
