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
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('BMV');
console.log(car);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
// class BaseObject {
//   public width: number = 0;
//   public height: number = 0;
// 
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }
// 
// class Rectangle extends BaseObject {
//   calcSize(): number {
//     return this.width * this.height;
//   }
// }
// 
// let baseObject = new BaseObject(0, 0);
// let rectangle = new Rectangle(5, 2);
// 
// console.log(baseObject);
// console.log(rectangle);
// console.log(rectangle.calcSize());
// Exercise 2. Alternative solution
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.height = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.height = 2;
console.log(rectangle.calcSize());
// Exercise 3
var CommonPerson = /** @class */ (function () {
    function CommonPerson() {
        this.enumerable = true;
        this.configurable = true;
        this._firstName = '';
    }
    Object.defineProperty(CommonPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return CommonPerson;
}());
var commonPerson = new CommonPerson();
console.log(commonPerson);
commonPerson.firstName = 'Max';
console.log(commonPerson.firstName);
commonPerson.firstName = 'Maximilian';
console.log(commonPerson.firstName);
