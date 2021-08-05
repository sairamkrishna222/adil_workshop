class MaxStack:

    def __init__(self):
        self.__stack=[]
        
    def push(self, x: int):
        self.__stack.append(x)
        

    def pop(self) -> None:
        if len(self.__stack)!=0:
            self.__stack.pop()
        
    def getMax(self):
        if len(self.__stack)==0:
            return -1
        return max(self.__stack)
    
T=int(input())
while(T>0):
    mx=MaxStack()
    n=int(input())
    for i in range(n):
        inp=input().split()
        if inp[0]=="push":
            mx.push(int(inp[1]))
        if inp[0]=="pop":
            mx.pop()
        if inp[0]=="getmax":
            print(mx.getMax())
    T-=1