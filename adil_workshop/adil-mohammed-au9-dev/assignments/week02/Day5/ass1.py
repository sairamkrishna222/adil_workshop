if __name__ == '__main__':
    n = int(input("enter a number :"))
    for i in range (1, n+1):
        if (i%3==0 and i%5==0):
            print ("fizzbuzz")
        elif ( i%3==0):
            print("Fizz")
        elif (i/5==0):
            print("buzz")
        else:
            print(i) 

    