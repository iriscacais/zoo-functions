const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return {};
  }
  return data.species.filter((specie) => {
    const specieByiD = [];
    if (ids.find((id) => id === specie.id)) {
      specieByiD.push(specie);
      return specieByiD;
    }
    return specieByiD;
  });
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
