
def printAl(arr,n):
    for n in range(0,n,2):
        print(arr[n],end=" ")
    

if __name__=="__main__":
    t=int(input())
    for i in range(t):
        n=int(input())
        arr=list(map(int,input().split()))
        printAl(arr,n)
        print()
# } Driver Code Ends