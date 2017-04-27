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

var input1 = [[ 1, 2, 3 ],  //row
             [ 4, 5 ],
             [ 6 ]];

             //output = 720

function productAll (array) {
  // your code here
  return array.reduce(function(product, row){
    console.log('product ', product);
    console.log('row ', row);
    //product starts at 1. will hold all the results of reduce on each row
    //
    product *= row.reduce(function(prev, current){
      console.log('prev ', prev);
      console.log('current ', current);
      console.log(prev * current);
      return prev * current;
    });
    console.log(product);
    return product;
  }, 1);
}

console.log(productAll(input1));


var input2 = [[ 'Thundercats', '80s' ], //row
             [ 'The Powerpuff Girls', '90s' ], //row
             [ 'Sealab 2021', '00s' ]]; //row
// var expected = { 'Thundercats': '80s',
//                  'The Powerpuff Girls': '90s',
//                  'Sealab 2021': '00s' };

function objectify (array) {
  // your code here
  //cartoonObject is our accumulator object, so also need {}
  //reach row is the element being passed in which is an array
  //console log to get the keys and values to populate our cartoonObject
  //create cartoonObject
  //return cartoonObject starting variable
  return array.reduce(function(cartoonObject, row){
    // console.log(row);
    // console.log('row ', row[0]);
    // console.log('row2 ', row[1]);
    //build up cartoonObject object[key]
    cartoonObject[row[0]] = row[1];
    // console.log('cartoonObject ', cartoonObject);

    // console.log('cartoon Object ', cartoonObject);
    return cartoonObject;
  },
  {});
}

//to get cartoonObject without console logging before return
console.log(objectify(input2));


function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
