
"use strict";

const findBestEmployee = function(employees) {
    const employeesValues = Object.values(employees);
    let maxTask = Math.max(...employeesValues);

    
    const employeesKeys = Object.keys(employees);
    for (let employeeKey of employeesKeys){
        if (employees[employeeKey] === maxTask){
            return(employeeKey);
        }
    }


  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux