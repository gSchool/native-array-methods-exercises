function sum (array) {
  return array.reduce(function(a, b){
    return a + b;
  })
};

function productAll (array) {
  return array.reduce(function(a, b){
    return a * b.reduce(function(c, d){
      return c * d;
    }, 1)
  }, 1)
};

function objectify (array) {
  return array.reduce(function(a, b, index, arr){
    a[b[0]] = (a[b[0]] || b[1]);
    return a;
  }, {})
};

function luckyNumbers (array) {
  return array.reduce(function(a, b, ind, arr){
    if (ind < arr.length -1){
      return a + b + ", ";
    } else{
      return a + "and " + b
    }
  }, "Your lucky numbers are: ")
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
