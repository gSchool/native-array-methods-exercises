let multiplyBy10 = (array) =>(array.map((item) => (item * 10)));

let shiftRight = (array) =>(array.map((item,i,ray) => (ray[(i > 0) ? i - 1 : (ray.length - 1)])));

let onlyVowels = (array) =>(array.map((item) => (item.match(/[a|e|i|o|u]/gi)).join('')));

let doubleMatrix = (array) =>{
  let newRay = [];
  array.map((bigItem) => (newRay.push(bigItem.map((item) => (item * 2)))));
  return newRay;
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
