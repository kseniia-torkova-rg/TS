'use strict';

// в простейшем случае деструктивного присваивания объектов имена переменных совпадают с именами ключей объекта
let person = {
  firstName: 'John',
  lastName: 'The Greatest'
};

let {firstName, lastName} = person;
// или без создания дополнительной переменной для объекта:
// let {firstName, lastName} = {firstName: 'John', lastName: 'The Greatest'};
console.log(firstName, lastName);

// если переменной потребуется присвоить имя, отличное от имени соответствующего ключа, можно использовать такой синтаксис
let person2 = {
  firstName: 'Kate',
  lastName: 'The Greatest'
};

let {firstName: first, lastName: last, age = 25} = person2;
console.log(first, last);
// можно создать переменные даже если соответствующего ключа не существует, и присвоить им значения по умолчанию
// в качестве имени ключа объекта может быть передана переменная или выражение, которое будет динамически вычислено в соответствующий ключ

// при деструктивном присваивании объектов возможно работать со вложенными объектами
let user = {
  name: 'ksenya',
  profession: 'frontend-developer',
  social: {
    github: 'ksenya.t',
    slack: 'ksenya_t'
  }
};

let {name: firstname, profession, social: { github: gh }} = user;
console.log(firstname, profession, gh);

// деструктивное присваивание объекта возможно при передаче аргументов в функцию
function post(url, {data: { firstname, lastname }, cache}) {
  console.log(name, profession, cache);
}

let result = post('api/users', { data: user, cache: false });

// деструктивное присваивание объектов используется и при возврате значения из функций
function getUserInfo() {
  return {
    name: 'ksenya',
    profession: 'frontend-developer',
    social: {
      github: 'ksenya.t',
      slack: 'ksenya_t'
    }
  };
}

let { name: userName, profession: userProfession, social: { slack } } = getUserInfo();
console.log(userName, userProfession, slack);
