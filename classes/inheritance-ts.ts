class SomePerson {
  public name: string;
  private surname: string;
  protected username: string = 'alice';
  
  constructor(name: string, public age: number) {
    this.name = name;
  }
  
  printUsername() {
    console.log(this.username);
    this.setSurname('Green');
  }
  
  private setSurname(surname: string) {
    this.surname = surname;
    console.log(this.surname);
  }
}

// подкласс наследует из основного класса всё, кроме приватных методов и свойств
class Ann extends SomePerson {
  constructor(username: string) {
    super('Ann', 25);
    this.username = 'anna'
  }
}

const somePerson = new Ann('Anna');

console.log(somePerson);
