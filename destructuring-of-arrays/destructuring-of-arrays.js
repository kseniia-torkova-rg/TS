'use strict';

const languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

let [js, php, py, rb] = languages; 
// или без дополнительной переменной languages 
// let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
// значения из массива в переменные копируются по порядку

let scores = [3, 4, 5];
let [low, , high, higher, highest = 7] = scores;
// запятая означает пропустить значение
// если значений в массиве недостаточно, переменная создается со значением undefined
// если для переменной не хватает значения в массиве, можно присвоить его сразу при объявлении переменной; если же в массиве достаточно значений, переменная получит значение из массива
console.log(low, high, higher, highest);

let points = [7, 8, 9, 10, 11];
let [var1, var2 = 3, var3, ...rest] = points;
console.log(var1, var2, var3, rest);

// если в деструктивно присваемом массиве есть вложенный массив, при объявлении переменных можно использовать дополнительные скобки
let scoresA = [9, 12, [3, 2]];
let [val4, val5, val6] = scoresA;
console.log(val4, val5, val6);

let scoresB = [9, 12, [3, 2]];
let [val7, val8, [val9, val20]] = scoresB;
console.log(val7, val8, val9, val20);

// деструктивное присваивание можно использовать как аргумент функции
function computeScores([low, mid]) {
  console.log(low, mid);
}
computeScores([3, 4]);

// деструктивное присваивание можно использовать для возврата несольких значений из функции
function getScores() {
  return [11, 24, 788];
}

let [var4, var5, var6] = getScores();
console.log(var4, var5, var6);

// деструктивное присваивание можно использовать для быстрого изменения значений нескольких переменных
let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
