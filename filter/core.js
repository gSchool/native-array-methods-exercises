function onlyEven (array) {
  var filteredArray = [];
  function evenTest(number){
    if(number%2===0){
      return number;
    }
  }
    filteredArray = array.filter(evenTest);
    return filteredArray;
};

function onlyOneWord (array) {
  var filteredArray = [];
  function singleWord(string){
    letterArray = string.split('')
    if(letterArray.indexOf(' ')===-1){
      return letterArray.join('');
    }
  }
  filteredArray = array.filter(singleWord);
  return filteredArray;
};

function positiveRowsOnly (array) {
  var positiveRowsArray =[];
  function checkRow(anArray){
    var truthArray = [];
    if(anArray.length>1){
      anArray.forEach(function(element){
        if(element>0){
          truthArray.push(true);
        }else{
          truthArray.push(false);
        }
      })
    }
    if(truthArray.indexOf(false)===-1){
      return true;
    }
    return false;
  }
  positiveRowsArray = array.filter(checkRow);
  return positiveRowsArray;
};

function allSameVowels (array) {
  var sameVowel = [];
  function filterVowel(string){
    var vowelArray = [];
    var stringArray = string.split('');
    stringArray.forEach(function(element){
      if(['a','e','i','o','u'].indexOf(element)!== -1){
        vowelArray.push(element)
      }
    })
    return vowelArray;
  }
};



module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
