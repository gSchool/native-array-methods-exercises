function multiplyBy10 (array) {
  var mapped = [];
  mapped =  array.map(function(element){
   return element*10;
 })
 return mapped;
};

function shiftRight (array) {
  shiftedArray = [];
  shiftedArray = array.map(function(element){
    var long = array.length
    console.log (array[array.indexOf(element)+1])
    if(array.indexOf(element)===array.length-1){
      array[0]= element;
    }else{
      array[array.indexOf(element)+1]= element;
    }
  })
  return shiftedArray;
};

function onlyVowels (array) {
  var mapped = [];
  mapped = array.map(function(element){
    var justVowels = [];
    justVowels = element.split("").map(function(letter){
        var vowelWord = [];
      if (['a','e','i','o','u'].indexOf(letter) !== -1){
        vowelWord.push(letter);
      } return vowelWord.join(" ")
    })
    return justVowels.join('');
  })
 return mapped
};

function doubleMatrix (array) {
  var doubledMatrixArray = [];
  doubledMatrixArray = array.map(function(element){
    var matrixElements = [];
    matrixElements = element.map(function(number){
      var twoTimes = number*2;
      return twoTimes;
    })
    return matrixElements;
  })
  return doubledMatrixArray;
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
