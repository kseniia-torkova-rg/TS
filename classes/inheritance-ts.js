var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SomePerson = /** @class */ (function () {
    function SomePerson(name, age) {
        this.age = age;
        this.username = 'alice';
        this.name = name;
    }
    SomePerson.prototype.printUsername = function () {
        console.log(this.username);
        this.setSurname('Green');
    };
    SomePerson.prototype.setSurname = function (surname) {
        this.surname = surname;
        console.log(this.surname);
    };
    return SomePerson;
}());
// подкласс наследует из основного класса всё, кроме приватных методов и свойств
var Ann = /** @class */ (function (_super) {
    __extends(Ann, _super);
    function Ann(username) {
        var _this = _super.call(this, 'Ann', 25) || this;
        _this.username = 'anna';
        return _this;
    }
    return Ann;
}(SomePerson));
var somePerson = new Ann('Anna');
console.log(somePerson);
