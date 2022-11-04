const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }

  const especie = species.find((specie) => specie.name === animal.specie);
  if (animal.sex !== undefined) {
    const animalSex = especie.residents.filter((element) => element.sex === animal.sex);
    return animalSex.length;
  }
  return especie.residents.length;
}
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals());
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }))
module.exports = countAnimals;
