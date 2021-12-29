function solveEquation(a, b, c) {
  "use strict";
  let arr;
  let d;
  d = b**2 - 4*a*c;
  
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let x;
    x = -b/(2*a);
    arr = [x];
  } else {
    let x1;
    let x2;
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr = [x1, x2];
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  let checkPersent = Number(percent);
  let checkContribution = Number(contribution);
  let checkAmount = Number(amount);
  let totalAmount;

  if (Number.isNaN(checkPersent) === true) {
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение ' + '"' + percent + '"';
  } else if (Number.isNaN(checkContribution) === true) {
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение ' + '"' + contribution + '"';
  } else if (Number.isNaN(checkAmount) === true) {
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение ' + '"' + amount + '"';
  } else {
    let loanBody = amount - contribution;

    let date1 = new Date();
    let date2 = new Date(date);
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();

    let numberMonths = (year2 - year1)*12 + (month2 - month1);

    let P = percent/12/100;
    let monthlyPayment = loanBody*(P + P/(((1 + P)**numberMonths) - 1));
    
    let result = (monthlyPayment*numberMonths).toFixed(2);
    totalAmount = Number(result);
  };

  return totalAmount;
}