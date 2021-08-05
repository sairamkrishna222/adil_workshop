var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let max = 0;
    
    while(set.size > 0){
        let temp = helper(set.values().next().value, set, 1);
        max = max > temp ? max : temp
    }
    
    return max 
    
};

const helper = (curr, set, count = 0) => {
    set.delete(curr);
    let temp = curr;
    while(set.has(temp + 1)){
        set.delete(temp++);
        count++;
    }
    while(set.has(curr - 1)){
        set.delete(curr--);
        count++;
    }
    return count 
}