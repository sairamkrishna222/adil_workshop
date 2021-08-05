def sort(lst):
    for i in range(5):
        hole = i
        for j in range(i,6):
            if lst[j]<lst[hole]:
                hole = j
            temp = lst[i]
            lst[i] = lst[hole]
            lst[hole] = temp
lst = [26,629,9,62,6,4]
sort(lst)
print(lst)