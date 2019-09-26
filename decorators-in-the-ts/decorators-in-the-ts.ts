// по сути, декораторы - это функции, которые можно привязать к классам, методам или свойствам, чтобы расширить работу с ними или изменить их
// объявление декоратора - это создание обычной функции
// любая функция может быть декоратором, это зависит только от ее параметров и того, к чему предполагается ее привязать
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

// чтобы привязать декоратор к классу, необходимо указать перед этим классом символ @ и имя функции-декоратора без круглых скобок
@logged
class Person1 {
    constructor() {
        console.log("Hi!");
    }
}


// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car1 {

}


// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(false)
@printable
class Plant1 {
    name = "Green Plant";
}
const plant1 = new Plant1();
(<any>plant1).print();


// Method Decorator
// Property Decorator
// декоратор метода и декоратор свойства
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project1 {
    // вызов декоратора свойства
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    // вызов декоратора метода с параметром false предотвращает возможность переопределять метод извне 
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project1("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);


// Parameter Decorator
// декоратор параметра
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);