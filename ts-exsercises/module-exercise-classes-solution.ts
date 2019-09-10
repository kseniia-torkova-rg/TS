// Exercise 1
class Car {
  public name: string;
  public acceleration: number = 0;
  
  constructor(name: string) {
    this.name = name;
  }
  
  honk() {
    console.log("Toooooooooot!");
  }
  
  accelerate(speed: number) {
    this.acceleration += speed;
  }
}

let car = new Car('BMV');

console.log(car);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
class BaseObject {
  public width: number = 0;
  public height: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.height;
  }
}

let baseObject = new BaseObject(0, 0);
let rectangle = new Rectangle(5, 2);

console.log(baseObject);
console.log(rectangle);
console.log(rectangle.calcSize());

// Exercise 2. Alternative solution
// class BaseObject {
//   width = 0;
//   height = 0;
// }
// 
// class Rectangle extends BaseObject {
//   calcSize() {
//     return this.width * this.height;
//   }
// }
// 
// const rectangle = new Rectangle();
// rectangle.width = 5;
// rectangle.height = 2;
// console.log(rectangle.calcSize());

// Exercise 3
class CommonPerson {
  enumerable: boolean = true;
  configurable: boolean = true;
  
  private _firstName: string = '';
  
  get firstName() {
    return this._firstName;
  }
  
  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

let commonPerson = new CommonPerson();
console.log(commonPerson);
commonPerson.firstName = 'Max';
console.log(commonPerson.firstName);
commonPerson.firstName = 'Maximilian';
console.log(commonPerson.firstName);
