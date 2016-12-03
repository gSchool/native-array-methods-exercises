//Working these with strict Functional programming principles; all variables are being treated as immutable. Hence some redundancy to avoid revisiting variables

function multiplyBy10(array) {
    const by10Arr = array.map(number => {
        return (number * 10);
    });
    return by10Arr;
};

function shiftRight(array) {
    const shiftedArray = array.map((element, index, array) => {
        if (index === 0) {
            return array[array.length - 1];
        } else {
            return array[index - 1];
        }
    });

    return shiftedArray;
}

function onlyVowels(array) {
    const vowelArray = array.map((word, index) => {
        const vowelsOnlyWord = word.replace(/[b-d]|[f-h]|[j-n]|[p-t]|[v-z]/ig, "");
        return vowelsOnlyWord;
    });
    return vowelArray;
};

function doubleMatrix(array) {
    const doubledArray = array.map((innerArray) => {
        return innerArray.map((number) => {
            return number * 2;
        });
    });
    return doubledArray;
};

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};
