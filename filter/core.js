function onlyEven (array) {
  return array.filter(function (num) {
    return num % 2 === 0;
  });
}

function onlyOneWord (array) {
  return array.filter(function (phrase) {
    return phrase.split(' ').length <= 1;
  });
}

function positiveRowsOnly (array) {
  return array.filter(function (row) {
    return row.filter(function (num) {
      return num > 0;
    }).length === row.length;
  });
}

function allSameVowels (array) {
  return array.filter(function (word) {
    var vowels = ['a','e','i','o','u'];
    var wordVowels = word.split('').filter(function (letter) {
      return vowels.indexOf(letter) !== -1;
    });
    
    return wordVowels.filter(function (letter, _, letters) {
      return letter === letters[0];
    }).length === wordVowels.length;
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};