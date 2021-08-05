function reverse(n) {
    var result = parseInt(Math.abs(n).toString().split("").reverse().join(""))
    if(result < Math.pow(-2, 31) || result > Math.pow(2, 31)) {
        return 0
    }
    else{
        return result * Math.sign(n)
    }
}

    console.log(reverse(-1230));
    console.log(reverse(1563847412));