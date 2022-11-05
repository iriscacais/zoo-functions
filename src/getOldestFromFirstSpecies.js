const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaborador = employees.find((employee) => employee.id === id);
  const animalID = colaborador.responsibleFor[0];
  const animal = species.find((specie) => specie.id === animalID).residents
    .reduce((acc, cur) => (acc.age > cur.age ? acc : cur));
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
