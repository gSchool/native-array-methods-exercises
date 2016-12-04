const data = require("./data.js");

function entryCalculator(entrants) {
    const prices = data.prices;
    console.log(entrants);
    const entrantsMatrix = Object.entries(entrants);
    // const entryMoney = entrantsMatrix.reduce((first, second) => {
    //   const firstType = Object.keys(first);
    //   const firstQty = Object.values(first);
    //   console.log(`${firstType} with quantity ${firstQty}`);
    // });
    //
    // return entryMoney;
};
entryCalculator({
    'Adult': 2,
    'Child': 3,
    'Senior': 1
});

function schedule(dayName) {
    // your code here
};

function animalCount(species) {
    // your code here
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
