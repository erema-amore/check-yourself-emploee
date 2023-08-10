import React, { useState } from 'react';

const EmployeeTable = ({ employees }) => {
  const [editedEmployees, setEditedEmployees] = useState(employees);

  const handleDaysChange = (index, days) => {
    const updatedEmployees = [...editedEmployees];
    updatedEmployees[index].days = days;
    setEditedEmployees(updatedEmployees);
  };

  const handleSalaryPerDayChange = (index, salaryPerDay) => {
    const updatedEmployees = [...editedEmployees];
    updatedEmployees[index].salaryPerDay = salaryPerDay;
    setEditedEmployees(updatedEmployees);
  };

  const getTotalSalary = () => {
    return editedEmployees.reduce((total, employee) => {
      return total + employee.days * employee.salaryPerDay;
    }, 0);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days</th>
            <th>Salary Per Day</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {editedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>
                <input
                  type="number"
                  value={employee.days}
                  onChange={(e) => handleDaysChange(index, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.salaryPerDay}
                  onChange={(e) => handleSalaryPerDayChange(index, e.target.value)}
                />
              </td>
              <td>{employee.days * employee.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Salary: {getTotalSalary()}</p>
    </div>
  );
};

export default EmployeeTable;
