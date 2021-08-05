string = input('Enter the string: ')

counter = 1
for i in range(2):
    counter += 1
    flag = string.isalpha()
    if(flag != True):
        string = input('Please Enter String of Characters. Enter the string: ')
    elif(flag == True):
        print(string.capitalize())
        break
    if(counter == 3):
        print("You're out of chances.")