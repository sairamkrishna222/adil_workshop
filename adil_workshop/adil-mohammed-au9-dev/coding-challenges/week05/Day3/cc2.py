
def Occ_of_num(a,x):
    count = 0
    for i  in range(len(a)):
        if a[i]==x:
            count+=1
    if count == 0:
        return -1
    else:
        return count
t = int(input())
for _ in range (t):
    n,x = map(int,input().split())
    a = list(map(int,input().split()))
    print(Occ_of_num(a,x))