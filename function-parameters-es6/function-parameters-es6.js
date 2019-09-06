'use strict';

// параметры по умолчанию
function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`);
}
greet('Hi');

// rest parameters
function sum(...values) {
  console.log(values instanceof Array);
  
  let sum = 0;
  
  values.forEach(function (value) {
    sum += value;
  });
  
  console.log(sum);
}
sum(5, 7, 2, 10);

// или reduce вместо forEach
function sum2(...values) {  
  console.log(values.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }));
}

sum2(5, 7, 2, 10);
