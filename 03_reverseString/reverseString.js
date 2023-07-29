const reverseString = function(string) {
    let ret='';
    for (const ch of string) {
        ret = ch + ret;
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
