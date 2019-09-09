'use strict';

class Task {
    constructor(title) {
      this._title= title;
      this.done = false;
      Task.count += 1;
      console.log('Создание задачи');
    }
    
    get title() {
      return this._title;
    }
    
    set title(value) {
      this._title = value;
    }
    
    static getDefaultTitle() {
      return 'Задача';
    }
    
    complete() {
      this.done = true;
      console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;

// чтобы указать, что класс SubTask является подклассом Task, используется ключевое слово extends
// это всё, что нужно, чтобы создать наследование между двумя классами

// если у подкласса нет собственного конструктора, он будет использовать конструктор родителя
// если у подкласса есть собственный конструктор, то для того, чтобы он мог вызвать конструктор родителя, необходимо использовать ключевое слово super
// для корректной работы super() вызывается первой строкой внутри конструктора подкласса
// для передачи в родительский конструктор аргумента его необходимо объявить в конструкторе подкласса и при вызове родительского конструктора с помощью super()

// помимо свойств из конструктора родителя подкласс может наследовать также методы родителя, геттеры, сеттеры и статические свойства
// если же унаследованные элементы не подходят этому подклассу, их можно перезаписать или вызвать и дополнить

// объявление класса в ES6 не всплывает, поэтому нельзя использовать класс до его объявления
// классы в ES6 не попадают в объект window и не засоряют глобальное пространство имен
class SubTask extends Task {
  constructor(title) {
    super(title);
    console.log('Создание подзадачи');
  }
  
  // перезапись родительского метода complete
  // complete() {
  //   this.done = true;
  //   console.log(`Подзадача "${this.title}" выполнена`);
  // }
  
  // в родительском методе изменяется вывод в консоль, но this.done = true; сохраняется в том же виде за счет вызова метода родителя через super.
  complete() {
    super.complete();
    console.log(`Подзадача "${this.title}" выполнена`);
  }
}

let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6');

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
