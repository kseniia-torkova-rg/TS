class Person {
  // в TS нет необходимости использовать слово this для присваивания свойств
  // свойства просто пишутся внутри класса, за пределами конструктора, непосредственно в фигурных скобках класса
  
  // чтобы разделить публичные и приватные свойства класса, перед именем свойства можно указать ключевое слово public или private
  // по умолчанию все свойства являются публичными
  // есть также свойства с типом protected, они не являются публичными, но доступны не только внутри текущего класса, как приватные свойства, а и наследуются всеми классами, созданными на основе данного класса
  public name: string;
  private surname: string;
  protected username: string = 'alice';
  
  // в конструктор могут передаваться параметры; для обращения к свойствам класса может использоваться ключевое слово this
  // параметры в конструктор могут передаваться как из объявленных свойств класса, так и объявляться непосредсвенно при объявлении конструктора
  // например, свойство name объявлено выше, в классе, и передается как аргумент, значение ему присваивается внутри конструктора с помощью ключевого слова this
  // а свойство age объявляется сразу в аргументах конструктора и его значение передается напрямую в конструктор при использовании; но это свойство всё равно тоже будет свойством данного класса
  constructor(name: string, public age: number) {
    this.name = name;
  }
  
  // класс может содержать методы, причем они могут использовать свойства класса, которые объявлены как приватные или защищенные, потому что сам метод объявлен внутри класса
  // методы также бывают public, private, protected
  printUsername() {
    console.log(this.username);
    this.setSurname('Green');
  }
  
  private setSurname(surname: string) {
    this.surname = surname;
    console.log(this.surname);
  }
}

// новые объекты создаются на основе объявленного класса с помощью ключевого слова new и вызова класса как функции
// сразу при создании в класс передаются аргументы, которые указаны в конструкторе
const person = new Person('Alice', 22);

console.log(person);

person.printUsername();



// ***
// Getters & Setters
// ***
class Plant {
  private _species: string = 'Default';
  
  get species() {
    return this._species;
  }
  
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
plant.species = 'squash';
console.log(plant.species);



// ***
// Static properties & methods
// ***
class Helpers {
  // в отличие от ES6 статические свойства можно объявлять прямо внутри класса, используя ключевое слово statis
  // статическое свойство
  static PI: number = 3.14;
  
  // статический метод
  static calcCircumference(diametеr: number): number {
    return this.PI * diametеr;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
