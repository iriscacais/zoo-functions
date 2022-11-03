const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employeeName.includes(employee.firstName) || employeeName
    .includes(employee.lastName));
}
console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
