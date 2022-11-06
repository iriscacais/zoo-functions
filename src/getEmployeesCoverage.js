const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeesCoverage(employee) {
  // if (employees.firstName === employee.value || employees.lastName === employee.value || employees.id === employee.value) {

  // }

}
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

// function getEmployees(name) {

// }
function getSpecies(identification) {
  const getEmployees = employees.filter((employee) => employee
    .lastName === identification || employee
    .firstName === identification || employee.id === identification);

  const getSpeciesResponsable = getEmployees.map((getEmployee) => getEmployee.responsibleFor);
  return getSpeciesResponsable;
}
console.log(getSpecies('Emery'));
module.exports = getEmployeesCoverage;
