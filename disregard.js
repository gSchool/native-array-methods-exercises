// function allSameVowels (array) {
//   var sameVowel = [];
//   var vowels = [];
//   vowels.push(array.forEach(function(element){
//     var stringArray = element.split('');
//     vowelArray = [];
//     stringArray.forEach(function(element){
//       if(['a','e','i','o','u'].indexOf(element)!== -1){
//         vowelArray.push(element)
//       }return vowelArray
//     })
//   }))
//   return vowels
// };


function allSameVowels(arrays){
  var vowels = [];
  var sameVowel =[];
  var samevowel = [];
  arrays.forEach(function(element){
  var emptyArray = [];
    var stringArray = element.split('')
    for(var i=0;i<stringArray.length;i++){
      if(['a','e','i','o','u'].indexOf(stringArray[i])!==-1){
        emptyArray.push(stringArray[i])
      }
    }
     vowels.push(emptyArray.join(''))
  })
  console.log(vowels)
  var counter =0;
    for(var i=0;i<vowels.length;i++){
      var elementArray = vowels[i].split('')
      var counterArray = [];
      for(var j=0;j<elementArray.length;j++){
        if(elementArray[0]!==elementArray[j]){
          counter++
        }else{
          counterArray.push(elementArray[j])
        }
      }
      if(counterArray.length===elementArray.length){
        sameVowel.push(counterArray.join(''));
      }
    }
  for (var i=0;i<sameVowel.length;i++){
    var indexof = vowels.indexOf(sameVowel[i]);
    var word = array[indexof];
    samevowel.push(word);
  }
  return samevowel;
}
