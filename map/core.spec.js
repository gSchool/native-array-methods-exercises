var assert = require('assert'),
    core   = require('./core');

describe('Map', function() {
  describe('#multiplyBy10()', function () {
    it('multiplies all elements in an array by 10', function () {
      var array = [45, 1, -10, 11, 250];
      assert.deepEqual([450, 10, -100, 110, 2500], core.multiplyBy10(array));
    });
  });

  describe('#shiftRight()', function () {
    it('shifts items in an array to the right by one', function () {
      var array = [{ name: '' }, 10, "left-side"];
      assert.deepEqual(["left-side", { name: '' }, 10], core.shiftRight(array));
    });
  });

  describe('#onlyVowels()', function () {
    it('removes any non-vowel character from words in an array', function () {
      var array = ['average', 'exceptional', 'amazing'];
      assert.deepEqual(['aeae', 'eeioa', 'aai'], core.onlyVowels(array));
    });
  });

  describe('#doubleMatrix()', function () {
    it('doubles the numbers in the matrix, maintaining the same structure', function () {
      var matrix = [[1,2,3],
                    [4,5,6],
                    [7,8,9]];
      var result = [[2,4,6],
                    [8,10,12],
                    [14,16,18]];
      assert.deepEqual(result, core.doubleMatrix(matrix));
    });
  });
});
