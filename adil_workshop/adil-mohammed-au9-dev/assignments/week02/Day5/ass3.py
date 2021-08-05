def space_count(line):
    count=0
    for i in line:
        if (i.isspace()):
            count=count+1
    return count
if __name__ =="__main__":
    line = input("enter your line:")
    result = space_count(line)
    print("space in your string are: ", result)
    