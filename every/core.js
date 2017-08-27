// Check to see if all elements in an array
// are even numbers.

function allEven(input){
  for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 !== 0){
      return false;
    }
  }
  return true;
}


// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  for(let i = 1; i < input.length; i++) {
    if(typeof input[i] !== typeof input[i-1]){
      return false;
    }
  }
  return true;
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  for (let i = 0; i < input.length; i++) {
    for (var j = 0; j < 3; j++) {
      if (input[i][j] <= 0) {
        return false;
      }
    }
  }
  return true;
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input;
};

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
