def twoSum( nums ,target):
    l = list()
    for i in range (0,len(nums)):
        for j in range (i+1,len(nums)):
            sum = (nums[i]+nums[j])
            if sum == target:
                l.append(i)
                l.append(j)
                return l
    return -1

if __name__ == "__main__":
    num = list(map(int,input().split()))
    target = int(input())
    print(twoSum(num,target))

    