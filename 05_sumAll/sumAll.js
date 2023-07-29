const sumAll = function(i,n) {
    if(  typeof i != 'number'|| typeof n != 'number' || i < 0 || n < 0){
        return 'ERROR';
    }
    else if( i > n){
        let temp= i;
        i=n;
        n=temp;
    }
    let sum=0;
    while(i <= n){
        sum += i;
        i++;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
