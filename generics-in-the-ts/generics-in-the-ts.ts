// Simple Generic
// функция-дженерик в общем случае дает возможность использовать ее с любым типом данных
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));


// Better Generic
// для того, чтобы тип данных, переданных в функцию-дженерик, учитывался, можно использовать угловые скобки <> и ключевое слово для типа
// T означает тип в целом, то есть тип передаваемых и возвращаемых данных должен соответсвовать тому, как используется функция-дженерик, то есть нельзя передать тип "число", а потом вызвать у него метод строки
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length);

// здесь тип указан явно, а не определяется по передаваемым данным
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));


// Built-in Generics
// В TS есть встроенные дженерики, например, Array является дженериком по умолчанию и при его создании можно уточнить, какой тип или типы данных допустимы для наполнения этого массива
const testResults2: Array<number> = [1.94, 2.33];
testResults2.push(-2.99);
console.log(testResults2);


// Arrays
// функции-дженерики также принимают как тип данных массив, при желании при вызове можно уточнить, какой тип данных должен быть у элементов этого массива
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);


// Generic Types
// помимо функций-дженериков в TypeScript есть типы-дженерики
// тип-дженерик позволяет связать тип данных с выходными данными и описать, какими данными может оперировать функция
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));


// Generic Class
// в TS также имеются функции-дженерики
// с помощью ключевого слова extends можно указать, какие примитивные типы допустимы в данном дженерике
// можно использовать несколько типов-дженериков одновременно
// при этом они могут быть независимы друг от друга
// например, <T extends number | string, U extends number | string> означает, что передаваемые значения могут смешанными, T может быть строкой, а U - числом
// <T extends U, U extends number | string> означает, что тип T может быть, как строкой, так и числом, но при этом он зависит от U и должен совпадать с текущим типом U
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());