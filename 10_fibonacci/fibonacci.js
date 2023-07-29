const fibonacci = function(n) {
    if( n < 0 )return "OOPS";
    let arr=[1,1];
    for(let l=2;l<n;l++){
        arr[l]=arr[l-1]+arr[l-2];
    }
    return arr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
