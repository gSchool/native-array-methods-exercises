function sum (array) {
  // your code here
  var result = 0;
  result = array.reduce((a,b)=>{
      return a+b;
  })
  return result;
};

function productAll (array) {
  var result = 1;
  var concatenatedArray = [];
  concatenatedArray = array.reduce((a,b)=>{
      return a.concat(b)
  })
  result = concatenatedArray.reduce((a,b)=>{
    return a*b;
  })
  return result;
};

function objectify (array) {
    var reducedObject = {};
    array.forEach((element)=>{
      var object = {};
      object[element[0]]=element[1];
      reducedObject[element[0]]=element[1];
    })
  return reducedObject;
};

function luckyNumbers (array) {
  var winningString = "Your lucky numbers are: "
    var emptyString = '';
  emptyString = array.reduce((a, b)=>{
    if(b===array[array.length-1]){
      return a.toString()+', and '+b.toString();
    }
      return  a.toString()+', '+b.toString();
  })
  return winningString+emptyString;
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
