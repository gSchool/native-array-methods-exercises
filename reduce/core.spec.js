var assert = require('assert'),
    core   = require('./core');

describe('Reduce', function() {
  describe('#sum()', function () {
    it('sum all the numbers in the array', function () {
      var array = [10,15,20,25,30,35];
      assert.equal(135, core.sum(array));
    });
  });

  describe('#productAll()', function () {
    it('return the product of all items in the matrix', function () {
      var matrix = [[1, 2, 3],
                    [4, 5],
                    [6]];
      assert.equal(720, core.productAll(matrix));
    });
  });

  describe('#objectify()', function () {
    it('turns an array of arrays into an object', function () {
      var matrix = [['Thundercats', '80s'],
                    ['The Powerpuff Girls', '90s'],
                    ['Sealab 2021', '00s']];
      var result = { 'Thundercats': '80s',
                     'The Powerpuff Girls': '90s',
                     'Sealab 2021': '00s' };
      assert.deepEqual(result, core.objectify(matrix));
    });
  });

  describe('#luckyNumbers()', function () {
    it('return a fortune like sentence with lucky numbers', function () {
      var array  = [30, 48, 11, 5, 32];
      var result = 'Your lucky numbers are: 30, 48, 11, 5, and 32';
      assert.equal(result, core.luckyNumbers(array));
    });
  });
});
