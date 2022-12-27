//  Buscar as espécies dos animais por meio de um ID e retornar um array contendo todos os animais dessa espécie.
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // return data.species.filter((specie) => {
  //   const specieByiD = [];
  //   if (ids.find((id) => id === specie.id)) {
  //     specieByiD.push(specie);
  //     return specieByiD;
  //   } if (!ids) {
  //     return [];
  //
  // });
  return species.filter((specie) => ids.includes(specie.id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
