// интерфейсы - это возможность typescript, интерфейсов в js нет
// при компиляции интерфейсы не попадают в итоговый js-код
// интерфейсы определяются с помощью ключевого слова interface
// с помощью интерфейса можно указать параметры и их тип для передачи в функцию как требуемые аргументы или для проверки характеристик объекта, также на основе интерфейса могут создаваться классы
// с помощью интерфейсов можно убедиться, что необходимые функции аргументы существуют и передаются в нее
// в интерфейсах могут декларироваться как свойства, так и методы
// метод в интерфейсе обозначается круглыми скобками после его имени, в скобках могут быть указаны принимаемые аргументы и их тип
// по сути интерфейс - это расширенный тип, который содержит совокупность значений
function greetPerson(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Ann';
}
// объект может быть сразу создан с отсылкой на интерфейс, которому он должен соответствовать
// в таком случае имя интерфейса указывается через двоеточие после имени объекта
var personInfo = {
    firstName: 'Max',
    age: 27,
    greet: function (lastNmame) {
        console.log("Hello, I am " + this.firstName + " " + lastNmame);
    }
};
personInfo.greet('Any');
changeName(personInfo);
greetPerson(personInfo);
// при передаче в функцию объекта посредством переменной проверяется, что объект содержит ключи, указанные в интерфейсе. Если ключей больше, они игнорируются, это не приводит к ошибке
// но если передавать в функцию непосредственно сам объект, то проверка на соответствие интерфейсу будет более строгой. Будет првоеряться, что объект содержит только те ключи, которые указаны в интерфейсе
// следующий код вызовет ошибку при компиляции
// greetPerson({firstName: 'Max', age: 27});
// чтобы создать класс на основе интерфейса после имени нового класса нужно указать ключевое слово implements и имя соответствующего интерфейса
var SuperPerson = /** @class */ (function () {
    function SuperPerson() {
    }
    SuperPerson.prototype.greet = function (lastNmame) {
        console.log("Hello, I am " + this.firstName + " " + lastNmame);
    };
    return SuperPerson;
}());
var myPerson = new SuperPerson();
myPerson.firstName = 'Ksenya';
greetPerson(myPerson);
myPerson.greet('Lastname');
// с помощью двоеточия указывается, что создаваемая функция будет использовать определенный интерфейс
var myDoubleFunction;
myDoubleFunction = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 35,
    firstName: 'Max',
    greet: function (lastNmame) {
        console.log('Hello');
    }
};
console.log(oldPerson);
