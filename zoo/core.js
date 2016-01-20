var zooData = require('./data');

function entryCalculator (entrants) {
  if ( !entrants ) { return 0 };
  
  return Object.keys(entrants).reduce(function (total, key) {
    return total += ( entrants[key] * zooData.prices[key] );
  }, 0);
};

function schedule (day) {
  function formatHours ( hours ) {
    if ( hours.close - hours.open ) {
      return 'Open from ' + hours.open + 'am until ' + 
             ( hours.close - 12 ) + 'pm';      
    } else {
      return 'CLOSED';
    };
  };

  var keys = day ? [day] : Object.keys(zooData.hours);

  return keys.reduce(function (result, dayKey) {
    var hours = zooData.hours[dayKey];
    var hoursStr = formatHours(hours);

    result[dayKey] = hoursStr;
    return result;
  }, {});
};

function animalCount (query) {
  animalsAndCounts = zooData.animals.reduce(function (result, species) {
    result[species.name] = species.residents.length;
    return result;
  }, {});

  return query ? animalsAndCounts[query] : animalsAndCounts;
};

function animalMap (options) {
  function formatSpeciesInfo (species) {
    if ( !options || !options.includeNames ) { return species.name };
    
    var name = species.name;
    var result = {};
    result[name] = species.residents;

    if ( options.sex ) {
      result[name] = result[name].filter(function (resident) {
        return resident.sex === options.sex;
      });
    };

    result[name] = result[name].map(function (animal) {
      return animal.name;
    });

    return result; 
  };


  return zooData.animals.reduce(function (result, species) {
    var speciesInfo = formatSpeciesInfo(species);
    
    if ( result[species.location] ) {
      result[species.location].push(speciesInfo);
    } else {
      result[species.location] = [speciesInfo];
    };

    return result;
  }, {});
};

function animalPopularity (rating) {
  var popularityObj = zooData.animals.reduce(function (result, species) {
    if ( result[species.popularity] ) {
      result[species.popularity].push(species);
    } else {
      result[species.popularity] = [species];
    };

    return result;
  }, {});

  for ( var key in popularityObj ) {
    popularityObj[key] = popularityObj[key].map(function (species) {
      return species.name;
    });
  };

  return popularityObj[rating] || popularityObj;
};

function byIds (database, ids) {
  if ( !ids ) { return [] };
  if ( typeof ids === 'string' ) { ids = [ids] };

  return ids.map(function (id) {
    return database.filter(function (resource) {
      return resource.id === id;
    })[0];
  });
};

function byName (database, options) {
  function constructResourceDb (resource) {
    if ( options.resources === 'animals' ) {
      return resource.residents;
    } else {
      return database;
    };
  };

  function animalFilter (resource) {
    return resource.name === options.name;
  };

  function employeeFilter (resource) {
    return (resource.firstName === options.name) ||
           (resource.lastName  === options.name);
  };

  function chooseFilter (resource) {
    if ( options.resources === 'animals' ) {
      return animalFilter(resource);
    } else {
      return employeeFilter(resource);
    };
  };

  if ( !options.name ) { return {} };

  return database.reduce(function (target, resources) {
    var resourceDb = constructResourceDb(resources);
    var found = resourceDb.filter(chooseFilter)[0];

    if ( found ) {
      target = found;
      if ( options.resources === 'animals' ) {
        target.species = resources.name
      };
    };

    return target;
  }, {});
}

function animalsByIds (ids) {
  return byIds(zooData.animals, ids);
};

function animalByName (name) {
  return byName(zooData.animals, { name: name, resources: 'animals' });
};

function employeesByIds (ids) {
  return byIds(zooData.employees, ids);
};

function employeeByName (name) {
  return byName(zooData.employees, { name: name, resources: 'employees '});
};

function byNameOrId (nameOrId) {
  var byId = employeesByIds(nameOrId);
  if ( byId[0] && byId[0].firstName ) { return byId };

  var byName = employeeByName(nameOrId);
  if ( byName && byName.firstName ) { return [byName] };
};

function managersForEmployee (nameOrId) {
  var employee = byNameOrId(nameOrId)[0];

  employee.managers = employeesByIds(employee.managers).map(function (manager) {
    return manager.firstName + ' ' + manager.lastName;
  });

  return employee;
};

function employeeCoverage (nameOrId) {
  function findEmployeeInfo () {
    return ( !nameOrId ) ? zooData.employees : byNameOrId(nameOrId);
  };

  var employeeData = findEmployeeInfo();

  return employeeData.reduce(function (result, employee) {
    var employeeName = employee.firstName + ' ' + employee.lastName;
    var animals = animalsByIds(employee.responsibleFor).map(function (species) {
      return species.name;
    });

    result[employeeName] = animals;
    return result;
  }, {});
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
};