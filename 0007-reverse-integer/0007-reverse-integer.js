var reverse = function(x) {
    let isNegative = x < 0;
    let res = Math.abs(x).toString().split("").reverse().join("");
    let reversedNum = isNegative ? -parseInt(res) : parseInt(res);
    
    if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversedNum;
};
