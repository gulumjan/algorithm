/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, sign = 1, result = 0;
    const INT_MAX = 2**31 - 1, INT_MIN = -(2**31);
    
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        
        if (sign * result < INT_MIN) return INT_MIN;
        if (sign * result > INT_MAX) return INT_MAX;
        
        i++;
    }
    
    return sign * result;
};

    
