var assert = require('assert'),
    core   = require('./core');

describe('core', function () {
  it('#allEven', function () {
    var goodInput = [ 2, 4, 10 ];
    assert.equal(core.allEven(goodInput), true)

    var badInput = [ 2, 4, 11 ];
    assert.equal(core.allEven(badInput), false);
  });

  it('#allSameType', function () {
    var goodInput = [ 1, 2, 3 ];
    assert.equal(core.allSameType(goodInput), true);

    var badInput = [ 1, 2, 3, '4' ];
    assert.equal(core.allSameType(badInput), false);
  });

  it('#positiveMatrix', function () {
    var goodInput = [[ 1, 2, 3 ],
                     [ 4, 5, 6 ],
                     [ 7, 8, 9 ]];
    assert.equal(core.positiveMatrix(goodInput), true);

    var badInput = [[ -1, 2, 3 ],
                    [ 4, -5, 6 ],
                    [ 7, 8, -9 ]];
    assert.equal(core.positiveMatrix(badInput), false);
  });

  it('#allSameVowels', function () {
    var goodInput = [ 'amalgam', 'zoom' ];
    assert.equal(core.allSameVowels(goodInput), true);

    var badInput = [ 'zoom', 'oligopoly' ];
    assert.equal(core.allSameVowels(badInput), false);
  });
});
