def missingNumbers(arr, brr):
    m =max(arr+brr)+1
    list = [0 for _ in range(m)]
    for i in arr:
        list[i]+=1
    for i in brr:
        list[i]-=1
    return sorted([item for item in range(len(list)) if list[item]!= 0])
