function multiplyBy10 (array) {
  var mapped = [];
  mapped =  array.map(function(element){
   return element*10;
 })
 return mapped;
};

// ************** Map USED *********************

function shiftRight(array){
  var intermediateArray = [];
  array.map(function(element){
      if(array.indexOf(element)!=array.length-1){
        intermediateArray.push(element)
      }else{
        intermediateArray.unshift(element)
      }
    })
    return intermediateArray;
  }

// ************** Map NOT USED *********************

// function shiftRight(array){
//   shiftedRight = [];
//   var popped = array.pop();
//   console.log(array)
//   shiftedRight.push(popped);
//   array.forEach(function(element){
//     shiftedRight.push(element)
//   })
//   return shiftedRight;
// }


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
