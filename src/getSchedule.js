const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function searchAnimals(scheduleTarget) {
  const specieFilter = species.find((specie) => specie.name === scheduleTarget);
  return specieFilter.availability;
}

function searchDay(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  const searchAnimal = species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((animal) => animal.name);
  return {
    officeHour: `Open from ${hours[scheduleTarget]
      .open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: searchAnimal,
  };
}
function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return searchAnimals(scheduleTarget);
  }

  if (Object.keys(data.hours).some((day) => day === scheduleTarget)) {
    const objeto = {};
    objeto[scheduleTarget] = searchDay(scheduleTarget);
    return objeto;
  }

  const objeto = {};
  Object.keys(data.hours).forEach((day) => {
    objeto[day] = searchDay(day);
  });
  return objeto;
}

module.exports = getSchedule;
