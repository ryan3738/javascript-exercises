const add = function(x, y) {
return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function(numberArray) {
return numberArray.reduce((a, b)=> a + b, 0)
};

const multiply = function (numberArray) {
  return numberArray.reduce((a, b) => a * b, 1)
};

const power = function (x, y) {
  return Math.pow(x, y)

};

const factorial = function(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  if (num > 0) return num * factorial(num-1)
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
