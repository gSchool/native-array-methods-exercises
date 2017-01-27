// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function (num) {
    return !(num % 2);
  });
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(function (item, index, array) {
    return (typeof item) === (typeof array[0]);
  });
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function (row) {
    return Array.isArray(row) && row.every(function (num) {
      return num > 0;
    });
  });
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(function (word) {
    var vowels = word.replace(/[^aeiou]/ig,'').split('');

    return vowels.every(function (vowel, index, array) {
      return vowel == array[0];
    });
  });
};

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
