function onlyEven (array) {
  // your code here
  return array.filter(function(val){
    return val % 2 == 0;
  })
};

function onlyOneWord (array) {
  // your code here
  return array.filter(function(val){
    return val.indexOf(" ") == -1
  })
};

function positiveRowsOnly (array) {
  // your code here
  return array.filter(function(val){
    return val.every(function(value){
      return value >= 0;
    })
  })
};

function allSameVowels (array) {
  var re = /[aeiou]/g;
  var re2 = /[a]/g;
  var re3 = /[e]/g;
  var re4 = /[i]/g;
  var re5 = /[o]/g;
  var re6 = /[u]/g;
  return array.filter(function(val){
    return deepEqual(val.match(re), val.match(re2)) || deepEqual(val.match(re), val.match(re3)) || deepEqual(val.match(re), val.match(re4)) || deepEqual(val.match(re), val.match(re5)) || deepEqual(val.match(re), val.match(re6))
  })
  function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
      return false;

    var propsInA = 0, propsInB = 0;

    for (var prop in a)
      propsInA += 1;

    for (var prop in b) {
      propsInB += 1;
      if (!(prop in a) || !deepEqual(a[prop], b[prop]))
        return false;
    }

    return propsInA == propsInB;
  }
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
