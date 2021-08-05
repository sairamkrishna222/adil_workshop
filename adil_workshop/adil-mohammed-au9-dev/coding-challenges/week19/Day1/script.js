var maxProfit = function(prices) {
    let maxProf = 0, curr = prices[0];
    
    for(let x of prices) {
        if(curr < x) maxProf = Math.max(maxProf, x - curr);
        else curr = x;
    }
    return maxProf;
};
console.log(maxProfit([7,1,5,3,6,4]))