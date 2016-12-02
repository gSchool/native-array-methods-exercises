function onlyEven (array) {
  return array.filter(function(index){
    return index % 2===0;
  });
};

function onlyOneWord (array) {
  return array.filter(function(index){
    return (!index.includes(' '));
  });
};

function positiveRowsOnly (array) {
  return array.filter(function(element, index, array){
    // return element.filter(function(element,index,array){
    //   return element >= 0;
    // });
  });
};

function allSameVowels (array) {
  var vowels = ['a','e','i','o','u'
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
