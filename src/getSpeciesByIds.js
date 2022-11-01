const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => {
    if (ids.find((id) => id === specie.id)) {
      return specie;
    }
  });
}
module.exports = getSpeciesByIds;
