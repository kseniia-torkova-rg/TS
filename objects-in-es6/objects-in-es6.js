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
  },

// в es6 для объявления геттеров и сеттеров используется тот же синтаксис, что и для обычных методов объекта и ключевые слова, соответственно, - get и set
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  
  set fullName(value) {
    this.firstName = value;
  }
};

person.sayHello();
console.log(person.fullName);
console.log(person);

// появилась возможность динамически присваивать ключи и свойства в объект с помощью переменных прямо внутри этого объекта в момент создания этого объекта
// в es5 возможно присвоить новый ключ только уже существующему объекту
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

let person2 = {
  firstName,
  lastName,
  email
}

// геттеры и сеттеры в es5
Object.defineProperty(person2, 'fullName', {
  // геттер - это функция, метод объекта, который ничего не принимает на вход и возвращает что-либо
  get: function() {
    return this.firstName + ' ' + this.lastName;
  },

// в отличие от геттера сеттер получает значение и с этим значением сеттер может что-либо сделать
// внутри объекта сеттер является функцией, то есть методом этого объекта
  set: function(value) {
    this.firstName = value;
  }
});

// обратиться к геттеру можно через точку после назания объекта, без круглых скобок
// то есть по сути внутри объекта геттер - это функция, но снаружи он является свойством
console.log(person2.fullName);

// обращение к сеттеру также происходит, как будто это свойство объекта
console.log(person2.fullName = 'Peter');

console.log(person2);
