const double = (value: number): number => value * 2;
console.log(double(10));

const greet = (name: string = 'Max'): void => console.log(`Hello, ${name}`);
greet();
greet('Anna');

const numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

let newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);

const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

const scientist: {firstName: string, experience: number} = {
  firstName: 'Will',
  experience: 12
};

const {firstName, experience} = scientist;
console.log(firstName, experience);
