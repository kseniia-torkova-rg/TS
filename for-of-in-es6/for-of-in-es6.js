'use strict';

// цикл for of
// в отличие от цикла for in, цикл for of, появившийся в ES6, позволяет перебирать сразу значения массива, а не его ключи
// оба цикла ниже возвращают один и тот же результат
let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let index in browsers) {
  console.log(browsers[index]);
}

console.log('---');

for (let browser of browsers) {
  console.log(browser);
}
