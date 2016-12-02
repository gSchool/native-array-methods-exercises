function multiplyBy10 (array) {
  let newArray = array.map(function(num){
    return num*10;
  });
  return newArray;
};

function shiftRight (array) {
  let newArray = array.map(function(current,index,array){
    if (index===0) {
      return array[array.length-1];
    } else {
      return array[index-1];
    }
  });
  return newArray;
};

function onlyVowels (array) {
 let arrayVowels = array.map(function(current){
   return current.replace(/[^aeiou]/ig,'');
 });
 return arrayVowels;
};

function doubleMatrix (array) {
  return array.map(function(current){
    return current.map(function(current){
      return current *2;
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
