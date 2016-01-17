function multiplyBy10 (array) {
  return array.map(function (num) {
    return num * 10;
  });
};

function shiftRight (array) {
  return array.map(function (val, index, arr) {
    return arr[index-1] || arr[arr.length-1];
  });
};

function onlyVowels (array) {
  return array.map(function (word) {
    return word.replace(/[^aeiou]/ig,'');
  });
};

function doubleMatrix (array) {
  return array.map(function (row) {
    return row.map(function (num) {
      return num * 2;
    });
  });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};