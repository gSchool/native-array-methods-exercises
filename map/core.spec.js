var assert = require('assert'),
    core   = require('./core');

describe('Map', function() {
  describe('#multiplyBy10()', function () {
    it('multiplies all elements in an array by 10', function () {
      var input = [ 45, 1, -10, 11, 250 ]
      var expected = [ 450, 10, -100, 110, 2500 ]
      var actual = core.multiplyBy10(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#shiftRight()', function () {
    it('shifts items in an array to the right by one', function () {
      var input = [ { name: '' }, 10, 'left-side' ];
      var expected = [ 'left-side', { name: '' }, 10 ]
      var actual = core.shiftRight(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#onlyVowels()', function () {
    it('removes any non-vowel character from words in an array', function () {
      var input = [ 'average', 'exceptional', 'amazing' ];
      var expected = [ 'aeae', 'eeioa', 'aai' ]
      var actual = core.onlyVowels(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#doubleMatrix()', function () {
    it('doubles the numbers in the matrix, maintaining the same structure', function () {
      var input = [[ 1, 2,3 ],
                   [ 4, 5,6 ],
                   [ 7, 8,9 ]];
      var expected = [[ 2, 4, 6],
                      [ 8, 10, 12],
                      [ 14, 16, 18]];
      var actual = core.doubleMatrix(input)

      assert.deepEqual(actual, expected);
    });
  });
});
