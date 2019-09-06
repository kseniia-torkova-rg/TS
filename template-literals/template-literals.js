'use strict';

function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');
// в шаблонных строках переменные обозначаются с помощью местозаполнителя ${} 
// шаблонная строка обозначается с помощью литерала обратных кавычек ``
// шаблонные строки по умолчанию поддерживают многострочность

// шаблонные строки поддерживают тегирование, это возможность привязать к шаблонной строки функцию, которая будет модифицировать эту строку
const name = 'Bill';

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}
// если неизвестно, сколько еще будет параметров, можно использовать
// function upperName(literals, ...values) { return literals[0] + values[0].toUpperCase(); }

console.log(upperName `Hello ${name}`);
