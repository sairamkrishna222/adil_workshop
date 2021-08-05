def firstMissingPositive(self, nums: List[int]) -> int:
    if nums == None or len(nums) == 0:
        return 1
    n = len(nums)
    contain1 = 0
    #Step 1
    for i in range(n):
        if nums[i] == 1:
            contain1 = 1
        elif nums[i] <= 0 or nums[i] > n:
            nums[i] = 1
            
    if contain1 == 0:
        return 1
    
    #Step 2
    for i in range(n):
        index = abs(nums[i]) - 1
        if nums[index] > 0:
            nums[index] = -1*nums[index]
            
    #Step 3        
    for i in range(n):
        if nums[i] > 0:
            return i+1
    return n+1

nums = [1,2,3,4]