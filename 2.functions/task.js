// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((acc, element) => acc + element, 0);
  

  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = arr.reduce((acc, element) => acc + element, 0);

  return sum;
}


function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    } 
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return Math.abs(max - min);
}



// Оставила для себя прежний вариант решения
/* 
let arrOfArr = [[0,1,2], [-1,-100]];

function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  return sum;
}

//result = worker(arrOfArr[2]);

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    } 
  }
  
  return max;
}

result = makeWork(arrOfArr, worker);

console.log('Максимальная сумма: ' + result);


// Задача 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } 
    
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let differenc = Math.abs(max - min);

  return differenc;
}

result = makeWork(arrOfArr, worker2);

console.log('Максимальная разность: ' + result); */