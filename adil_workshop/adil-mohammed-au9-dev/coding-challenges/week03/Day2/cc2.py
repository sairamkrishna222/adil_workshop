if __name__ == "__main__":
    Str1 = input("Enter a String1: ")
    Str2 = input("Enter a String2: ")
    sorted_str1 = sorted(Str1)
    sorted_str2 = sorted(Str2)
    if sorted_str1 == sorted_str2:
        print(True)
    else:
        print(False)

