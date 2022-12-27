// Calcular o valor total da entrada dos visitantes no zooconst data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const sumEntrants = { child: child.length, adult: adult.length, senior: senior.length };
  return sumEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countOfPeople = countEntrants(entrants);
  const { child, adult, senior } = countOfPeople;
  const priceObject = data.prices;
  const totalPrice = (child * priceObject.child) + (adult * priceObject.adult)
  + (senior * priceObject.senior);
  return totalPrice;
}
module.exports = { calculateEntry, countEntrants };
