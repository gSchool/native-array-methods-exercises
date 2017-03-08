const data = require("./data.js");

function entryCalculator(entrants) {
    if ((arguments.length > 0) && (Object.keys(entrants).length > 0)) {
        const prices = data.prices;
        const priceArray = Object.keys(prices);
        const revenue = priceArray.reduce((acc, thisItem) => {
            if (entrants.hasOwnProperty(thisItem)) {
                return (acc + (prices[thisItem] * entrants[thisItem]));
            } else {
                return acc;
            }
        }, 0);
        return revenue;
    } else {
        const revenue = 0;
        return revenue;
    }

};


function schedule(dayName) {
    const hours = data.hours;
    const hoursKeys = Object.keys(hours);
    if (arguments.length === 0) {
        const readableObject = hoursKeys.reduce((acc, element) => {
            const insertObject = returnReadableObject(hours, element);
            const accObject = Object.assign(acc, insertObject);
            return accObject;
        }, {});
        return readableObject;

    } else if (arguments.length === 1) {
        const readableObject = returnReadableObject(hours, dayName);
        return readableObject;
    }

    //Private interior function to return object in correct format
    function returnReadableObject(hours, element) {
        const open = hours[element].open;
        if (open !== 0) {
            const close = hours[element].close - 12;
            const readableValue = `Open from ${open}am until ${close}pm`;
            const insertObject = {
                [element]: readableValue
            };
            return insertObject;
        } else {
            return {
                [element]: "CLOSED"
            };
        }
    }

};


function animalCount(species) {
    if (arguments.length === 0) {
        const animalSummary = data.animals.reduce((acc, animal) => {
            const insertObject = {
                [animal.name]: animal.residents.length
            };
            const returnObject = Object.assign(acc, insertObject);
            return returnObject;
        }, {});
        return animalSummary;
    } else {
        const animalCount = data.animals.filter(animal => {
            if (animal.name === species) {
                const count = animal.residents.length;
                return (count);
            }
        });
        return animalCount[0].residents.length;
    }
};


function animalMap(options) {
    // your code here
};

function animalPopularity(rating) {
    // your code here
};

function animalsByIds(ids) {
    // your code here
};

function animalByName(animalName) {
    // your code here
};

function employeesByIds(ids) {
    // your code here
};

function employeeByName(employeeName) {
    // your code here
};

function managersForEmployee(idOrName) {
    // your code here
};

function employeeCoverage(idOrName) {
    // your code here
};


module.exports = {
    entryCalculator: entryCalculator,
    schedule: schedule,
    animalCount: animalCount,
    animalMap: animalMap,
    animalPopularity: animalPopularity,
    animalsByIds: animalsByIds,
    animalByName: animalByName,
    employeesByIds: employeesByIds,
    employeeByName: employeeByName,
    managersForEmployee: managersForEmployee,
    employeeCoverage: employeeCoverage
}
