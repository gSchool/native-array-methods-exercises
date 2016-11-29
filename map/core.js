function multiplyBy10 (array) {
  return array.map((item) => (item * 10));
};

function shiftRight (array) {
  return array.map((item, index, ray) => (ray[(index > 0) ? index - 1 : (ray.length - 1)]));
};

function onlyVowels (array) {
  return array.map((item) => (item.match(/[a|e|i|o|u]/gi)).join(''));
};

function doubleMatrix (array) {
  let newRay = [];
  array.map((bigItem) => {
    newRay.push(bigItem.map((item) => (item * 2)));
  });
  return newRay;
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
