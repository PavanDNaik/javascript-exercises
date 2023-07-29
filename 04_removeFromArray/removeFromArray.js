function linearSearch(arr,key){
    for( let i=0;i<arr.length;i++){
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
}
const removeFromArray = function(arr) {
    for(let i = 0; i < arguments.length; i++){
        let idx = linearSearch(arr,arguments[i]);
        if(idx != -1){
            let v1 = arr.slice(0,idx);
            let v2 =arr.slice(idx+1);
            arr = v1.concat(v2);
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
