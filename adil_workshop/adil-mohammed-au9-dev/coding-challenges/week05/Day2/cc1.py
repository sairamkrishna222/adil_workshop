#code
def mergeSort(li):
    if len(li)>1:
        mid=len(li)//2
        left_list=li[:mid]
        right_list=li[mid:]
        mergeSort(left_list)
        mergeSort(right_list)
        i=0
        j=0
        k=0
        while i<len(left_list) and j<len(right_list):
            if left_list[i]<right_list[j]:
                li[k]=left_list[i]
                i+=1
                k+=1
            else:
                li[k]=right_list[j]
                j+=1
                k+=1
        while i<len(left_list):
            li[k]=left_list[i]
            i+=1
            k+=1
        while j<len(right_list):
            li[k]=right_list[j]
            j+=1
            k+=1
    return li

t= int(input())
for i in range(t):
    l=list(map(int,input().split()))
    l1=list(map(int,input().split()))
    l2=list(map(int,input().split()))
    li=l1.extend(l2)
    res=mergeSort(l1)
    for i in res:
        print(i,end=" ")
    print()
 