var Person = /** @class */ (function () {
    // в конструктор могут передаваться параметры; для обращения к свойствам класса может использоваться ключевое слово this
    // параметры в конструктор могут передаваться как из объявленных свойств класса, так и объявляться непосредсвенно при объявлении конструктора
    // например, свойство name объявлено выше, в классе, и передается как аргумент, значение ему присваивается внутри конструктора с помощью ключевого слова this
    // а свойство age объявляется сразу в аргументах конструктора и его значение передается напрямую в конструктор при использовании; но это свойство всё равно тоже будет свойством данного класса
    function Person(name, age) {
        this.age = age;
        this.username = 'alice';
        this.name = name;
    }
    // класс может содержать методы, причем они могут использовать свойства класса, которые объявлены как приватные или защищенные, потому что сам метод объявлен внутри класса
    // методы также бывают public, private, protected
    Person.prototype.printUsername = function () {
        console.log(this.username);
        this.setSurname('Green');
    };
    Person.prototype.setSurname = function (surname) {
        this.surname = surname;
        console.log(this.surname);
    };
    return Person;
}());
// новые объекты создаются на основе объявленного класса с помощью ключевого слова new и вызова класса как функции
// сразу при создании в класс передаются аргументы, которые указаны в конструкторе
var person = new Person('Alice', 22);
console.log(person);
person.printUsername();
// ***
// Getters & Setters
// ***
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = 'squash';
console.log(plant.species);
// ***
// Static properties & methods
// ***
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    // статический метод
    Helpers.calcCircumference = function (diametеr) {
        return this.PI * diametеr;
    };
    // в отличие от ES6 статические свойства можно объявлять прямо внутри класса, используя ключевое слово statis
    // статическое свойство
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
