def reverse_int(n):
    neg_num=0
    reverse = 0
    if (n<0):
        n = n* -1
        neg_num = 1
    while(n>0):
        reminder =n % 10
        revrese = reverse * 10 + reminder    
        n = n // 10
    if (neg_num == 0):
        return reverse
    else:
        return (reverse * (-1))
if __name__ == "__main__":
    n = int(input("enter the number :"))
    print("reverse number is:", reverse_int(n))
    