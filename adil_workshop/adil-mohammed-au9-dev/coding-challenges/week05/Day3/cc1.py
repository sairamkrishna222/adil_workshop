def findPeakElement(nums):
    l = 0
    r = len(nums)-1
    while l<r:
        mid = 1+(r-1)//2
        if nums[mid]<nums[mid+1]:
            l = mid+1
        else:
            r = mid
    return l
if __name__ == "__main__":
    nums = list(map(int,input().split()))
    print(findPeakElement(nums))
