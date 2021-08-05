def Insertionsort(My_list):
    for i in range(1,len(My_list)):
        c = My_list[i]
        pos = i
        while c < My_list[pos-1] and pos>0:
            My_list[pos] = My_list[pos-1]
            pos = pos-1
        My_list[pos] = c 
lst = [2,6,5,9,8,1]
Insertionsort(lst)
print(lst)
