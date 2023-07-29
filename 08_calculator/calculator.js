const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum=0;
  for(const c of arr){
    sum += c;
  }
  return sum;
};

const multiply = function(arr) {
  let mul=1;
  for(const c of arr){
    mul *= c;
  }
  return mul;
};

const power = function(x , n) {
  return x ** n;
};

const factorial = function(n) {
	if( n == 0 || n == 1)return 1;

    let fact = 1;
    for(let i=2;i<=n;i++){
      fact *=i;
    }
    return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
