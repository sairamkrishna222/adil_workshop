def vowels(sta, list):
    vowels= "aeiouAeiou"
    list = []
    for i in sta:
        if (1 in vowels):
            list.append(i)
    return list
if __name__ == "__main__":
    sta = input("enter your line here: ")
    a = vowels(sta, list)
    print("vowels in your statment is :", a)
    
    