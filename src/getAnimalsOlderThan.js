const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
// então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.// Retorne um valor booleano.
// o que retorna bolleano é  some ou every. No caso entao devemos usar every.
