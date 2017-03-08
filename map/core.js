function multiplyBy10 (array) {
 return array.map(function(val){
   return val * 10;
 })
};

function shiftRight (array) {
  return array.map(function(val, index, arr){
    if (index == 0){
      return arr[arr.length -1]
    } else {
      return arr[index -1]
    }
  })
};

function onlyVowels (array) {
  var re = /[aeiou]/g;
  return array.map(function(c, i, arr){
    var vowels = c.match(re)
    if (!!vowels){
      return vowels.join("")
    } else {
      return "";
    }
  })
};

function doubleMatrix (array) {
 return array.map(function(c, i, arr){
   return c.map(function(curr, ind, arrayy){
     return curr * 2;
   })
 })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
