let onlyEven = (array) => (array.filter((item) => (item % 2 === 0)));

let onlyOneWord = (array) => (array.filter((item) => (item.match(/[' ']/) != ' ')));

let positiveRowsOnly = (array) =>{
  let newRay = [];
  let itemLength;
  array.map((bigItem) => {
    itemLength = bigItem.length;
    newRay.push(bigItem.filter((item) => (item >= 0)));
  });
  return newRay.filter((item) => item.length === itemLength);
};

let allSameVowels = (array) =>{
  let validIndex = [];
  let vowelRay = array.map((item) => (item.match(/[a|e|i|o|u]/gi)).join(''));
  vowelRay.forEach((item) => (validIndex.push(item.split('').sort().join() === item.split('').sort().reverse().join())));
  return array.filter((item, index) => (validIndex[index]));
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
