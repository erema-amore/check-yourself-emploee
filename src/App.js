import React from 'react';
import EmployeeTable from '../src/components/EmployeeTable'


let employees = [
  { name: 'Саламат', surname: 'Алиев', days: 20, salaryPerDay: 80 }, 
  { name: 'Дастан', surname: 'Догоев', days: 15, salaryPerDay: 40 }, 
  { name: 'Эмир', surname: 'Кубанычбеков', days: 22, salaryPerDay: 60 }, 
  { name: 'Шерман', surname: 'Мамаджанов', days: 15, salaryPerDay: 55 }, 
  { name: 'Албина', surname: 'Имашова', days: 18, salaryPerDay: 44 }, 
  { name: 'Азрет', surname: 'Омуракунов', days: 10, salaryPerDay: 22 }, 
  { name: 'Мирдин', surname: 'Бекбарсов', days: 20, salaryPerDay: 70 }, 
  { name: 'Байыш', surname: 'Момунов', days: 16, salaryPerDay: 33 }, 
  { name: 'Адилет', surname: 'Ногойбаев', days: 11, salaryPerDay: 16 }
];

function App() {
  return (
    <div className="App">
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
