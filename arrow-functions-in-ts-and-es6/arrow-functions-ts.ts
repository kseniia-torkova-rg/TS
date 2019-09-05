const multiplyNumbers = (num1: number, num2: number) => num1 * num2;

console.log(multiplyNumbers(100, 2));

const greetingFriend = friend => console.log(friend); // при использовании сокращенной стрелочной функции с одним параметром без круглых скобок, невозможно указать тип этого параметра, friend: string вызовет ошибку
                                                      // поэтому при использовании TS для указания типа параметра нужно всегда использовать круглые скобки (friend: string) в стрелочных функциях

// параметры функции по умолчанию
const countdown = (start: number = 10): void => {
  console.log(start);
  
  while (start > 0) {
    start--;
  }
  
  console.log('Done!', start);
};

countdown();
countdown(15);
