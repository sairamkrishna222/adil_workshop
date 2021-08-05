def solve(a,idx,res):
    if idx == len(a):
        print(res)
        return 
    res.append(a[idx])
    solve(a,idx+1,res)
    res.pop()
    solve(a,idx+1,res)
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        N = int(input())
        a = list(map(int,input().split()))
        res = []
        idx = 0
        solve(a,idx,res)