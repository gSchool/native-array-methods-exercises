function sum(array) {
    const masterSum = array.reduce((firstNumber, secondNumber) => {
        return firstNumber + secondNumber;
    });
    return masterSum;
};

function productAll(array) {
    const globalProduct = array.reduce((first, secondArray) => {
        debugger;
        if (Array.isArray(first)) {
            const firstInnerProduct = first.reduce((firstNumber, secondNumber) => {
                return (firstNumber * secondNumber);
            });
            const secondInnerProduct = secondArray.reduce((firstNum, secondNum) => {
                return (firstNum * secondNum);
            });

            return (firstInnerProduct * secondInnerProduct);
        } else {
            const firstInnerProduct = first;
            const secondInnerProduct = secondArray.reduce((firstNum, secondNum) => {
                return (firstNum * secondNum);
            });

            return (firstInnerProduct * secondInnerProduct);
        }
    });
    return globalProduct;
};

function objectify(array) {
    const returnObject = array.reduce((first, second) => {
        const secondObj = second.reduce((innerFirst, innerSecond) => {
            const insideObject = {
                [innerFirst]: innerSecond
            }
            return insideObject;
        });
        return Object.assign(first, secondObj);
    }, {});
    return returnObject;
};

function luckyNumbers(array) {
    const luckyReturnString = array.reduce((first, second, index) => {
        const last = array.length - 1;

        if (index === last) {
            return (`${first}, and ${second}`);
        } else if (index === 0) {
            return (`${first}${second}`);
        }
        else {
            return (`${first}, ${second}`);
        }

    }, "Your lucky numbers are: ");
    return luckyReturnString;
};

module.exports = {
    sum: sum,
    productAll: productAll,
    objectify: objectify,
    luckyNumbers: luckyNumbers
};
