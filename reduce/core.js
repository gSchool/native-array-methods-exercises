let sum = (array) => (array.reduce((prev, cur) => (prev + cur)));

let productAll = (array) => {
  var newRay = [];
  array.forEach((item) => (newRay.push(item.reduce((prev, cur) => (prev * cur ),1))));
  return newRay.reduce((prev, cur) => (prev * cur ),1);
};

function objectify (array) {
  return array.reduce((showObj, show) => {
    showObj[show[0]] = show[1];
    return showObj;
  }, {});
};

 let luckyNumbers = (array)=>(array.reduce((prev,cur,i,ray) => (`${prev}${i + 1 === ray.length ? ('and ' + cur).toString() :(cur + ', ').toString()}`),`Your lucky numbers are: `));

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
