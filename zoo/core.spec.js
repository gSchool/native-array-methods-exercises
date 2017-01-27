var assert = require('assert'),
    zoo    = require('./core');

describe('Zoo', function() {
  describe('#entryCalculator()', function () {
    it('returns 0 if no arguments passed in', function () {
      var actual = zoo.entryCalculator();
      assert.equal(actual, 0);
    });

    it('returns 0 if an empty object is passed in', function () {
      var actual = zoo.entryCalculator({});
      assert.equal(actual, 0);
    });

    it('returns the total price when given the number of adults, children, and seniors', function () {
      var entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
      var actual = zoo.entryCalculator(entrants);

      assert.equal(actual, 187.94);
    });
  });

  describe('#schedule()', function () {
    it('with no parameters, returns a more human readable schedule', function () {
      var actual = zoo.schedule();
      var expected = {
        'Tuesday': 'Open from 8am until 6pm',
        'Wednesday': 'Open from 8am until 6pm',
        'Thursday': 'Open from 10am until 8pm',
        'Friday': 'Open from 10am until 8pm',
        'Saturday': 'Open from 8am until 10pm',
        'Sunday': 'Open from 8am until 8pm',
        'Monday': 'CLOSED'
      };

      assert.deepEqual(actual, expected);
    });

    it('with a single day entered, returns only that day in a more human readable format', function () {
      var actual = zoo.schedule('Monday');
      var expected = {
        'Monday': 'CLOSED'
      };

      assert.deepEqual(actual, expected);

      var actual = zoo.schedule('Tuesday');
      var expected = {
        'Tuesday': 'Open from 8am until 6pm'
      };

      assert.deepEqual(actual, expected);
    });
  });

  describe('#animalCount()', function () {
    it('with no parameters, returns animals and their counts', function () {
      var actual = zoo.animalCount();
      var expected = {
                      'lions': 4,
                      'tigers': 2,
                      'bears': 3,
                      'penguins': 4,
                      'otters': 4,
                      'frogs': 2,
                      'snakes': 2,
                      'elephants': 4,
                      'giraffes': 6
                     };

      assert.deepEqual(actual, expected);
    });

    it('with the name of an animal species, returns only the count', function () {
      var actual = zoo.animalCount('lions');
      var expected = 4;

      assert.deepEqual(actual, expected);

      var actual = zoo.animalCount('snakes');
      var expected = 2;

      assert.deepEqual(actual, expected);
    });
  });

  describe('#animalMap()', function () {
    it('with no parameters, returns the animals categorized by location', function () {
      var actual = zoo.animalMap();
      var expected = {
                       NE: [ 'lions', 'giraffes' ],
                       NW: [ 'tigers', 'bears', 'elephants' ],
                       SE: [ 'penguins', 'otters' ],
                       SW: [ 'frogs', 'snakes' ]
                     };

      assert.deepEqual(actual, expected);
    });

    it('with specified options, returns names of animals', function () {
      var options = { includeNames: true }
      var actual = zoo.animalMap(options);
      var expected = { NE: [ { lions: [ 'Zena', 'Maxwell', 'Faustino', 'Dee' ] },
                             { giraffes: [ 'Gracia', 'Antone', 'Vicky',
                                           'Clay', 'Arron', 'Bernard' ] } ],
                       NW: [ { tigers: [ 'Shu', 'Esther' ] },
                             { bears: [ 'Hiram', 'Edwardo', 'Milan' ] },
                             { elephants: [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ] } ],
                       SE: [ { penguins: [ 'Joe', 'Tad', 'Keri', 'Nicholas' ] },
                             { otters: [ 'Neville', 'Lloyd', 'Mercedes', 'Margherita' ] } ],
                       SW: [ { frogs: [ 'Cathey', 'Annice' ] },
                             { snakes: [ 'Paulette', 'Bill' ] } ] };

      assert.deepEqual(actual, expected);
    });


    it('with specified options, returns names of fe/male animals', function () {
      var options = { includeNames: true, sex: 'female' }
      var actual = zoo.animalMap(options);
      var expected = { NE: [ { lions: [ 'Zena', 'Dee' ] },
                             { giraffes: [ 'Gracia', 'Vicky' ] } ],
                       NW: [ { tigers: [ 'Shu', 'Esther' ] },
                             { bears: [] },
                             { elephants: [ 'Ilana', 'Bea' ] } ],
                       SE: [ { penguins: [ 'Keri' ] },
                             { otters: [ 'Mercedes', 'Margherita' ] } ],
                       SW: [ { frogs: [ 'Cathey', 'Annice' ] },
                             { snakes: [ 'Paulette' ] } ] };

      assert.deepEqual(actual, expected);
    });

    it('will only return gender specific information if includeNames is set', function () {
      var options = { sex: 'female' }
      var actual = zoo.animalMap(options)['NE'][0];
      var expected = 'lions';

      assert.equal(actual, expected);
    });
  });

  describe('#animalPopularity()', function () {
    it ('with no parameters, returns animals sorted into groups by popularity', function () {
      var actual = zoo.animalPopularity();
      var expected = { '2': [ 'frogs' ],
                       '3': [ 'snakes' ],
                       '4': [ 'lions', 'penguins', 'otters', 'giraffes' ],
                       '5': [ 'tigers', 'bears', 'elephants' ] };

      assert.deepEqual(actual, expected);
    });

    it ('with a single rating parameter, returns those animals that match the rating', function () {
      var actual = zoo.animalPopularity(3);
      var expected = [ 'snakes' ];

      assert.deepEqual(actual, expected);
    });
  });

  describe('#animalsByIds()', function () {
    it ('with no parameters, returns an empty array', function () {
      var actual = zoo.animalsByIds();
      var expected = [];

      assert.deepEqual(actual, expected);
    });

    it ('with a single id, returns the animals with that id', function () {
      var actual = zoo.animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
      var expected = [{
        id: '0938aa23-f153-4937-9f88-4858b24d6bce',
        name: 'lions',
        popularity: 4,
        location: 'NE',
        residents: [
          { name: 'Zena', sex: 'female', age: 12 },
          { name: 'Maxwell', sex: 'male', age: 15 },
          { name: 'Faustino', sex: 'male', age: 7 },
          { name: 'Dee', sex: 'female', age: 14 }
        ]
      }];

      assert.deepEqual(actual, expected);
    });

    it ('with an array of ids, returns those animals that have one of the ids', function () {
      var actual = zoo.animalsByIds(['0938aa23-f153-4937-9f88-4858b24d6bce',
                                     'e8481c1d-42ea-4610-8e11-1752cfc05a46']);
      var expected = [{
        id: '0938aa23-f153-4937-9f88-4858b24d6bce',
        name: 'lions',
        popularity: 4,
        location: 'NE',
        residents: [
          { name: 'Zena', sex: 'female', age: 12 },
          { name: 'Maxwell', sex: 'male', age: 15 },
          { name: 'Faustino', sex: 'male', age: 7 },
          { name: 'Dee', sex: 'female', age: 14 }
        ]
      },{
        id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        name: 'tigers',
        popularity: 5,
        location: 'NW',
        residents: [
          { name: 'Shu', sex: 'female', age: 19 },
          { name: 'Esther', sex: 'female', age: 17 }
        ]
      }];

      assert.deepEqual(actual, expected);
    });
  });

  describe('#animalByName()', function () {
    it('with no parameters, returns an empty object', function () {
      var actual = zoo.animalByName();
      var expected = {};

      assert.deepEqual(actual, expected);
    });

    it('with a name, returns the animal\'s resident object and animal species', function () {
      var actual = zoo.animalByName('Clay');
      var expected = { name: 'Clay', sex: 'male', age: 4, species: 'giraffes' };

      assert.deepEqual(actual, expected);
    });
  });

  describe('#employeesByIds()', function () {
    it('with no parameters, returns an empty array', function () {
      var actual = zoo.employeesByIds();
      var expected = [];

      assert.deepEqual(actual, expected);
    });

    it('with a single id, returns the employee with that id', function () {
      var actual = zoo.employeesByIds('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
      var expected = [{
        id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        firstName: 'Nigel',
        lastName: 'Nelson',
        managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                   'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
        responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
                         'e8481c1d-42ea-4610-8e11-1752cfc05a46']
      }];

      assert.deepEqual(actual, expected);
    });

    it('with an array of ids, returns the employees with those ids', function () {
      var actual = zoo.employeesByIds(['c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
                                        '0e7b460e-acf4-4e17-bcb3-ee472265db83']);
      var expected = [{
        id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        firstName: 'Nigel',
        lastName: 'Nelson',
        managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                   'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
        responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
                         'e8481c1d-42ea-4610-8e11-1752cfc05a46']
      },
      {
        id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        firstName: 'Burl',
        lastName: 'Bethea',
        managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
        responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
                         'e8481c1d-42ea-4610-8e11-1752cfc05a46',
                         'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
                         'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
      }];

      assert.deepEqual(actual, expected);
    });
  });

  describe('#employeeByName()', function () {
    it('with no parameters, returns an empty object', function () {
      var actual = zoo.employeeByName();
      var expected = {};

      assert.deepEqual(actual, expected);
    });

    it('when provided with a first name, returns the employee object', function () {
      var actual = zoo.employeeByName('Emery');
      var expected = {
        id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
        firstName: 'Emery',
        lastName: 'Elser',
        managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
        responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
                         'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
                         '0938aa23-f153-4937-9f88-4858b24d6bce']
      };

      assert.deepEqual(actual, expected);
    });

    it('when provided with a last name, returns the employee object', function () {
      var actual = zoo.employeeByName('Wishart');
      var expected = {
        id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
        firstName: 'Wilburn',
        lastName: 'Wishart',
        managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
                   'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
        responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
                         'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
      };

      assert.deepEqual(actual, expected);
    });
  });

  describe('#managersForEmployee()', function () {
    it('with an employee\'s id, returns the names of that employee\'s managers', function () {
      var actual = zoo.managersForEmployee('b0dc644a-5335-489b-8a2c-4e086c7819a2');
      var expected = {
        id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
        firstName: 'Emery',
        lastName: 'Elser',
        managers: ['Stephanie Strauss'],
        responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
                         'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
                         '0938aa23-f153-4937-9f88-4858b24d6bce']
      };

      assert.deepEqual(actual, expected);
    });

    it('with an employee\'s first name, returns the names of that employee\'s managers', function () {
      var actual = zoo.managersForEmployee('Ardith');
      var expected = {
        id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
        firstName: 'Ardith',
        lastName: 'Azevado',
        managers: ['Emery Elser'],
        responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
                         'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
      };

      assert.deepEqual(actual, expected);
    });

    it('with an employee\'s last name, returns the names of that employee\'s managers', function () {
      var actual = zoo.managersForEmployee('Wishart');
      var expected = {
        id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
        firstName: 'Wilburn',
        lastName: 'Wishart',
        managers: ['Burl Bethea', 'Ola Orloff'],
        responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
                         'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
      };

      assert.deepEqual(actual, expected);
    });
  });

  describe('#employeeCoverage()', function () {
    it('with no parameters, returns a list of employees and the animals they\'re responsible for', function () {
      var actual = zoo.employeeCoverage();
      var expected = { 'Nigel Nelson': [ 'lions', 'tigers' ],
                       'Burl Bethea': [ 'lions', 'tigers', 'bears', 'penguins' ],
                       'Ola Orloff': [ 'otters', 'frogs', 'snakes', 'elephants' ],
                       'Wilburn Wishart': [ 'snakes', 'elephants' ],
                       'Stephanie Strauss': [ 'giraffes' ],
                       'Sharonda Spry': [ 'otters', 'frogs' ],
                       'Ardith Azevado': [ 'tigers', 'bears' ],
                       'Emery Elser': [ 'elephants', 'bears', 'lions' ] };

      assert.deepEqual(actual, expected);
    });

    it('with an employee\'s id, returns the animals that employee is responsible for', function () {
      var actual = zoo.employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
      var expected = { 'Sharonda Spry': [ 'otters', 'frogs' ] };

      assert.deepEqual(actual, expected);
    });

    it('with an employee\'s first name, returns the animals that employee is responsible for', function () {
      var actual = zoo.employeeCoverage('Stephanie');
      var expected = { 'Stephanie Strauss': [ 'giraffes' ] };

      assert.deepEqual(actual, expected);
    });

    it('with an employee\'s last name, returns the animals that employee is responsible for', function () {
      var actual = zoo.employeeCoverage('Azevado');
      var expected = { 'Ardith Azevado': [ 'tigers', 'bears' ] };

      assert.deepEqual(actual, expected);
    });
  });
});
