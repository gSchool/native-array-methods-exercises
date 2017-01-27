// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function (num) {
    return num > 10;
  });
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function (word) {
    return word.length > 10;
  });
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(function (row) {
    return row.some(function (val) {
      return val;
    });
  });
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some(function (phrase) {
    return phrase.split(' ').some(function (word) {
      return word == 'Lost';
    });
  });
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
