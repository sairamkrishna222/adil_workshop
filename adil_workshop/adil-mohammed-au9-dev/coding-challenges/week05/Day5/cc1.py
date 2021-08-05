"""def restoreString(s,indices): 
    z= sorted(list(zip(indices,s)))
    m= ''
    for i in range(len(z)):
        m+=z[i][1]
    return m"""
if __name__ == "__main__":
    s = input("enter the string:")
    indices = list(map(int,input().split()))
    r={i:j for i,j in zip(indices,s)}
    print("".join(r[key] for key in sorted(r)))