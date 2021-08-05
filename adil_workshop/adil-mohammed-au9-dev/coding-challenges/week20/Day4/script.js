// function bf(num1,num2){
//     const totalArray = [...num1,...num2].sort((a,b)=> a -b);
//     const mp = Math.floor(totalArray.length/2)
//     return totalArray%2 !==0 ? totalArray[mp] : (totalArray[mp]+totalArray[mp-1])/2 
// }

// const num1 = [1,3]
// const num2 = [2]
// console.log(bf(num1,num2))

function findMedian(nums1 = [] , nums2 = []){
    let i1 = 0;
    let i2 = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1+len2;
    
    if (len == 0){
        return null
    }

    const merged = [];

    while (i1<len1 && i2<len2){
        if(nums1[i1]<=nums2[i2]){
            merged.push(nums1[i1++])

        }else{
            merged.push(nums1[i1])
        }
    }
    while (i1<len1){
        merged.push(nums[i1++])
    }
    while (i2<len2){
        merged.push(nums[i2++])
    }
    const isOdd = len%2;
    if (isOdd){
        return merged[(len-1)/2]
    }else{
        return (merged[len/2]+ merged[len/2-1])/2 
    }
    
}
const nums1 = [1,3]
const nums2 = [2]
console.log(findMedian(nums1, nums2))