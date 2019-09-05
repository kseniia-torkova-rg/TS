'use strict';

const add = (a, b) => a + b;

const square = x => x * x; // если аргумент только один, можно не использовать круглые скобки

const giveMeAnAnswer = () => console.log(42);

const multiply = (x, y) => { // если в теле стрелочной функции больще одной строки, необходимо использовать фигурные скобки и использовать слово return явно
  let result = x * y;
  return result;
};

const getPerson = () => ({ name: 'John' }); // при возвращении объекта из сокращенной стрелочной функции, его необходимо заключить в круглые скобки

(() => console.log('IIFE'))(); // использование стрелочной функции в качестве самовызывающейся

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);

// решение проблемы потери контекста в методе объекта
let person = {
  name: 'Bob',
  greet: function() {
    const that = this;
    window.setTimeout(function() {
      console.log('Hello, my name is ' + that.name);
      console.log('this is', this);
      console.log('that is ', that);
    }, 1000);
  }
};

person.greet();

// та же проблема, решение с помощью стрелочной функции; 
// значение this в стрелочной функции берется из контекста, в котором эта функция объявлена
let person2= {
  name: 'Alice',
  greet: function() {
    window.setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
      console.log('this is', this);
    }, 3000);
  }
};

person2.greet();

// стрелочные функции нельзя использовать в качестве конструктора и невозможно получить доступ к их прототипу
// к стрелочным функциям нельзя применять методы .bind(), .call(), .apply(), потому что в стрелочных функциях нельзя изменить значение this

