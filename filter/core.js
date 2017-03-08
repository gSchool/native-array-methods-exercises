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

// ************** ONLY ONE WORD*****************************

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


// ************** POSITIVE ROWS ONLY*****************************

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
      });
    }
    if(truthArray.indexOf(false)===-1){
      return true;
    }
    return false;
  }
  positiveRowsArray = array.filter(checkRow);
  return positiveRowsArray;
};

// ************** ONLY SAME VOWELS*****************************

function allSameVowels(arrays){
  var vowels = [];
  var sameVowel =[];
  var samevowel = [];
  arrays.forEach(function(element){
  var emptyArray = [];
    var stringArray = element.split('')
    for(var i=0;i<stringArray.length;i++){
      if(['a','e','i','o','u'].indexOf(stringArray[i])!==-1){
        emptyArray.push(stringArray[i])
      }
    }
     vowels.push(emptyArray.join(''))
  })
  var counter =0;
    for(var i=0;i<vowels.length;i++){
      var elementArray = vowels[i].split('')
      var counterArray = [];
      for(var j=0;j<elementArray.length;j++){
        if(elementArray[0]!==elementArray[j]){
          counter++
        }else{
          counterArray.push(elementArray[j])
        }
      }
      if(counterArray.length===elementArray.length){
        sameVowel.push(counterArray.join(''));
      }
    }
  for (var i=0;i<sameVowel.length;i++){
    var indexof = vowels.indexOf(sameVowel[i]);
    var word = array[indexof];
    samevowel.push(word);
  }
  return samevowel;
}





module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
