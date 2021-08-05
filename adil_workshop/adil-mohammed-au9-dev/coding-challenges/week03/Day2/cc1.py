if __name__ == '__main__': 
    str = input("Enter a string :")
    print("string is", str)
    count = {}
    for x in str:
        if x in count:
            count[x] +=1
        else:
            count[x] = 1
    print(count)    
