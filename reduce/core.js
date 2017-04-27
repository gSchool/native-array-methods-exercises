'use strict';
var input = [ 10, 15, 20, 25, 30, 35 ];
// var expected = 135
function sum (array) {
  // your code here
  return array.reduce(function(initialValue, element){
    console.log(initialValue);
    console.log(element);
    return initialValue + element;
  });
}

console.log(sum(input));

function productAll (array) {
  // your code here
};

function objectify (array) {
  // your code here
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
