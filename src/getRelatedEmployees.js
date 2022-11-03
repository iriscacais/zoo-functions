const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const relatedEmployees = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } if (isManager(managerId) === true) {
    employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        const fullName = `${employee.firstName} ${employee.lastName}`;
        relatedEmployees.push(fullName);
      }
    });
    return relatedEmployees;
  }
}
module.exports = { isManager, getRelatedEmployees };
