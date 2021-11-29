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
  let totalAmount;
  Number(percent);
  Number(contribution);
  Number(amount);
  Number(date);

  if (typeof percent != 'number') {
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение ' + percent;
  } else if (typeof contribution != 'number') {
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение ' + contribution;
  } else if (typeof amount != 'number') {
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение ' + amount;
  } else {
    let loanBody;
    loanBody = amount - contribution;
  
    let date1 = new Date(date);
    let today = new Date();
    let monthsLoan = (date1 - today)/2592000000;
    Math.round(monthsLoan);
  
    let P = percent/12/100;
    let monthlyPayment;
    monthlyPayment = loanBody*(P + P/(((1 + P)**monthsLoan) - 1));
    
    totalAmount = monthlyPayment*monthsLoan + contribution;
  }

  return totalAmount;
}
