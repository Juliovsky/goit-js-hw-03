"use strict";

const countTotalSalary = function(employees) {
    const employeesValues = Object.values(employees);

    let totalSum = 0;
    
    for(let employeeValue of employeesValues){
        totalSum += employeeValue;
    }

    return totalSum;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400

  