'use strict';

// вывод промежуточного значения с помощью yield
function *generator () {
  yield 1;
  yield 2;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// присвоение yield в переменную и возврат его значения
function *generator2() {
  let result = yield;
  
  console.log(`Result: ${result}`);
}

let iterator2 = generator2();

console.log(iterator2.next()); // отправить значение в первый вызов next() нельзя, потому что этот вызов запускает генератор
console.log(iterator2.next(1));

// одновременное присвоение значения и возврат yield
function *generator3 () {
  let result = 1 + (yield);
  
  console.log(`Result: ${result}`);
}

let iterator3 = generator3();

console.log(iterator.next());
console.log(iterator.next(1));

// многократное присвоение yield с помощью массива
function *generator4 () {
  let array = [yield, yield, yield];
  
  console.log(array[2]);
}

let iterator4 = generator4();

console.log(iterator4.next());
console.log(iterator4.next(1));
console.log(iterator4.next(2));
console.log(iterator4.next(3));

// присвоение в yield значений с помощью массива
function *generator5 () {
  yield 42;
  yield [1, 2, 3];
  yield* [4, 5, 6];
  yield 43;
}

let iterator5 = generator5();

console.log(iterator5.next().value);
console.log(iterator5.next().value);
console.log(iterator5.next().value);
console.log(iterator5.next().value);
console.log(iterator5.next().value);
console.log(iterator5.next().value);
console.log(iterator5.next().value);

// вызов одного генереатора в другом генераторе
function *generateArray () {
  yield* [10, 20, 30];
}

function *generator6 () {
  yield 1000;
  yield* generateArray();
  yield 9999;
}

let iterator6 = generator6();

console.log(iterator6.next().value);
console.log(iterator6.next().value);
console.log(iterator6.next().value);
console.log(iterator6.next().value);
console.log(iterator6.next().value);
console.log(iterator6.next().value);
