def solve(a):
    inn = 0
    exx = 0 
    for i in a:
        if exx>inn:
            new = exx
        else:
            new = inn
        
        inn = exx + i 
        exx = new
        
    return (exx if exx>inn else inn)

if __name__ == "__main__":
    t=int(input())
    for i in range(0,t):
        n=int(input())
        a=list(map(int,input().split()))[:n]
        print(solve(a))