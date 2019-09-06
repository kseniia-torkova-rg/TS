'use strict';

let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// в es6 стала короче запись для присваивания переменной ключу объекта
// вместо имя-ключа: имя переменной можно указать в объекта только имя переменной и будет создан ключ с таким же именем, как у переменной и значением этой переменной
let person = {
  firstName,
  lastName,
  email,
// по сравнению с es5 сократилось объявление метода
// вместо sayHello = function(), можно написать просто:
  sayHello() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
  }
};

person.sayHello();

// появилась возможность динамически присваивать ключи и свойства в объект с помощью переменных прямо внутри этого объекта
function createCar(property, value) {
  return {
    [property]: value,
    ['_' + property]: value,
    [property.toUpperCase()]: value,
    ['get' + property]() {
      return this[property];
    }
  };
}

console.log(createCar('vin', 1));
