var assert = require('assert'),
    core   = require('./core');

describe('Filter', function() {
  describe('#onlyEven()', function () {
    it('returns only those numbers that are even', function () {
      var input = [ 10, 15, 20, 25, 30, 35 ];
      var expected = [ 10, 20, 30 ]
      var actual = core.onlyEven(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#onlyOneWord()', function () {
    it('returns only those strings with a single word (no spaces)', function () {
      var input = [ 'return', 'phrases', 'with one word' ];
      var expected = [ 'return', 'phrases' ]
      var actual = core.onlyOneWord(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#positiveRowsOnly()', function () {
    it('return only the rows in the matrix that have all positive integers', function () {
      var input = [[ 1, 10, -100 ],
                   [ 2, -20, 200 ],
                   [ 3, 30,  300 ]];
      var expected = [[ 3, 30, 300 ]];
      var actual = core.positiveRowsOnly(input)

      assert.deepEqual(actual, expected);
    });
  });

  describe('#allSameVowels()', function () {
    it('return only those words where all the vowels are the same', function () {
      var input = [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
      var expected = [ 'amalgam', 'zoom' ]
      var actual = core.allSameVowels(input)

      assert.deepEqual(actual, expected);
    });
  });
});
