'use strict';

// spread operator - оператор разворачивания массива
let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

// rest operator - оператор разворота элементов массива в качестве отдельных параметров функции
const add = (a, b, c) => {
  console.log(a + b + c);
};

const numbers = [5, 9, 27];

add(...numbers);
