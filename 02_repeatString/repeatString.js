const repeatString = function(string ,num) {
    let ret = '';
    while(num > 0)
    {
        ret+=string;
        num--;
    }
    // console.log(string);
    return (num < 0 )?'ERROR':ret;
    
};

// Do not edit below this line
module.exports = repeatString;
