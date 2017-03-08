function onlyEven(array) {
    const evenArray = array.filter((number) => {
        return ((number % 2) === 0)
    });
    return evenArray;
};

function onlyOneWord(array) {
    const arrayOfSingleWords = array.filter((text) => {
        return (text.indexOf(" ") === -1);
    });
    return arrayOfSingleWords;
};

function positiveRowsOnly(array) {
    const positiveOnlyArray = array.filter((innerArray) => {
        return innerArray.every((number) => {
            return (number > 0);
        });
    });
    return positiveOnlyArray;
};

function allSameVowels(array) {
    const allSameArray = array.filter((word) => {
        const vowelsOnly = word.replace(/[b-d]|[f-h]|[j-n]|[p-t]|[v-z]/ig, "");
        const wordArray = vowelsOnly.split("");
        return wordArray.every(outerLetter => {
          return wordArray.every(innerLetter => {
              return (outerLetter === innerLetter);
            });
        });
    });
    return allSameArray;
};

module.exports = {
    onlyEven: onlyEven,
    onlyOneWord: onlyOneWord,
    positiveRowsOnly: positiveRowsOnly,
    allSameVowels: allSameVowels
};
