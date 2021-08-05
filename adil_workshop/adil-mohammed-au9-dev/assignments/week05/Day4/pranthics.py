def generateParenthesis(n): 
        ans = []
        def x(m,n,pre):
            if m>n: return
            if m==0: # if only ')' are left, we are done w this path
                ans.append(pre+")"*n)
                return
            x(m-1,n,pre+"(")
            x(m,n-1,pre+")")
        x(n,n,"")
        return ans
if __name__ == "__main__":
    n = int(input())
    print(generateParenthesis(n))

