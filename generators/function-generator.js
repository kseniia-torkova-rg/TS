'use strict';

// функция-генератор
function * generate () {
  console.log('start');
  yield;
  console.log('finish');
};

console.log(typeof generate);
let iterator = generate();
console.log(iterator.next());

// создание генератора вручную с помощью итератора
function generate2 () {
  let current = 1;
  
  console.log('start');
  
  return {
    [Symbol.iterator] () {
      return {
        next () {
          let result = { value: undefined, done: true };
          
          if (current <= 3) {
            result.value = current;
            result.done = false;
            current++;
          } else {
            result.value = underfined;
            result.done = true;
            console.log('finish');
          }
          return result;
        }
      };
    }
  };
};

console.log(typeof generate2);
let iterator2 = generate2()[Symbol.iterator]();
console.log(iterator2.next());

// функция-генератор, которая перебирает числа из указанного диапазона
const range = function * (start, end) {
  let current = start;
  
  while(current <= end) {
    yield current++;
  }
};

for (let num of range (1, 10)) {
  console.log(num);
}

// создание генератора, который перебирает числа из указанного диапазона, вручную с помощью итератора
const range2 = function (start, end) {
  let current = start;
  
  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result = { value: undefined, done: true };
          
          if (current <= end) {
            result.value = current;
            result.done = false;
            current += 10;
          }
          
          return result;
        }
      };
    }
  };
};

for (let num of range2 (20, 100)) {
  console.log(num);
}
