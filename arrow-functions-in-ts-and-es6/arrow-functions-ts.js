var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(100, 2));
var greetingFriend = function (friend) { return console.log(friend); }; // при использовании сокращенной стрелочной функции с одним параметром без круглых скобок, невозможно указать тип этого параметра, friend: string вызовет ошибку
// поэтому при использовании TS для указания типа параметра нужно всегда использовать круглые скобки (friend: string) в стрелочных функциях
// параметры функции по умолчанию
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
countdown(15);
