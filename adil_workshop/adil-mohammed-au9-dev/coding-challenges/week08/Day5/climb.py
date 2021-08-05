class DP:
    def __init__(self):
        self.dp = [-1] * (100001)


    def climbStairs(self,n):
        def recurse(current_sum=0):
            if current_sum > n:
                return 0
            if current_sum == n:
                return 1
            return recurse(current_sum + 1) + recurse(current_sum + 2)
        
        return recurse()
if __name__ == "__main__":
    a = DP
    n = 2
    print (a.climbStairs(n))