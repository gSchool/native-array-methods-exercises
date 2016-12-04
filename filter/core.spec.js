var assert = require('assert'),
    core   = require('./core');

describe('Filter', function() {
  describe('#onlyEven()', function () {
    it('returns only those numbers that are even', function () {
      var array = [10,15,20,25,30,35];
      assert.deepEqual([10,20,30], core.onlyEven(array));
    });
  });

  describe('#onlyOneWord()', function () {
    it('returns only those strings with a single word (no spaces)', function () {
      var array = ['return', 'phrases', 'with one word'];
      assert.deepEqual(['return', 'phrases'], core.onlyOneWord(array));
    });
  });

  describe('#positiveRowsOnly()', function () {
    it('return only the rows in the matrix that have all positive integers', function () {
      var matrix = [[1, 10,-100],
                    [2,-20, 200],
                    [3, 30, 300]];
      var result = [[3, 30, 300]];
      assert.deepEqual(result, core.positiveRowsOnly(matrix));
    });
  });

  describe('#allSameVowels()', function () {
    it('return only those words where all the vowels are the same', function () {
      var array = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
      assert.deepEqual(['amalgam', 'zoom'], core.allSameVowels(array));
    });
  });
});
