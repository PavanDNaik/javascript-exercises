const palindromes = function (string) {
    let text = string.toLowerCase();
    let str = text.replace(/[^a-z0-9]/g,'');
    let rev = str.split("").reverse().join('');
    if(rev === str)return true;
    return false;
    // let n= string.length;
    // string = string.toUpperCase();
    // let l=0,r=string.length -1;
    // while(true){
    //     while(l < n && (/[A-Z]/).test(string.charAt(l))) l++;
    //     while(r > 0 && (/[A-Z]/).test(string.charAt(r))) r--;
    //     if(l >= r || l>=n || r<0 )break;
    //     else if(string.charAt(l) !== string.charAt(r))return false;
    //     r--;
    //     l++;
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
