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
  return array.filter(function(element){
    return Math.min(...element)>=0;
    //probably not done as intended, but pretty proud of finding that workaround!
  });
};

function allSameVowels (array) {
  return array.filter(function(element){
    var subArray = element.split('');
    var wordVowels = [];
    var vowels = ['a','e','i','o','u'];
    var boo = true;
    for (var i = 0; i < subArray.length; i++) {
      if (vowels.includes(subArray[i])&&wordVowels.length<1){
        wordVowels.push(subArray[i]);
        console.log(wordVowels);
      }
      else if(vowels.includes(subArray[i])&&(wordVowels[0]!==subArray[i])){
        boo = false;
      }
    }
    return boo;
  });
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
