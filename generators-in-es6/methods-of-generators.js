'use strict';

function* generator () {
  try {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  }
  
  catch (evt) {
    console.log(evt);
  }
}

let iterator = generator ();

console.log(iterator.next()); // вызов итератора
console.log(iterator.return()); // присвоение значения true свойству done для остановки итератора
console.log(iterator.throw(new Error ('Let it be an error'))); // генерация ошибки в итераторе, которую можно поймать и обработать с помощью try catch
console.log(iterator.next());
