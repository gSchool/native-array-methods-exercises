function sum (array) {
  return array.reduce(function(a,b){
    return a+b;
  });
};

function productAll (array) {
  var newArray = array.reduce((a,b) =>{
    return a.concat(b);
  });
  return newArray.reduce((a,b) =>{
    return a*b;
  });
};

function objectify (array) {
  let myObject = {};
  for (var i = 0; i < array.length; i++) {
    array[i].reduce((a,b)=>{
      myObject[a]=b;
    });
  }
  return myObject;
};

function luckyNumbers (array) {
  // var numbers = '';
  // for (var i = 0; i < array.length; i++) {
  //   if (i<array.length-1){
  //     numbers += `${array[i]}, `;
  //   } else {
  //     numbers += `and ${array[i]}`;
  //   }
  // }
  // return `Your lucky numbers are: ${numbers}`;
  // WORKS BUT DOESNT USE REDUCE 😱
  var numbers = [];
  numbers = array.reduce(function(a,b,c){
      return a + (c < array.length-1 ? ', ' : ', and ') + b;
  });
  return `Your lucky numbers are: ${numbers}`;

};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
