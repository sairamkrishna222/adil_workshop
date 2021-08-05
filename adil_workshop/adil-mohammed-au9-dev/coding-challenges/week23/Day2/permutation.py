class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        p = len(nums) - 1
        index = -1
        
        while p > 0:
            if nums[p] > nums[p-1]:
                index = p-1
                break
            p -= 1
        
        if index == -1:
            nums.reverse()
        else:
            for i in range(len(nums)-1, p-1,-1):
                if nums[i] > nums[index]:
                    swapindice = i
                    break
    
            nums[index], nums[swapindice] = nums[swapindice], nums[index]
            nums[p:] = nums[p:][::-1]
if __name__ == "__main__":
    nums = [1,2,3]