var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// по сути, декораторы - это функции, которые можно привязать к классам, методам или свойствам, чтобы расширить работу с ними или изменить их
// объявление декоратора - это создание обычной функции
function logged(constructorFn) {
    console.log(constructorFn);
}
// чтобы привязать декоратор к классу, необходимо указать перед этим классом символ @ и имя функции-декоратора без круглых скобок
var Person1 = /** @class */ (function () {
    function Person1() {
        console.log("Hi!");
    }
    Person1 = __decorate([
        logged
    ], Person1);
    return Person1;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1 = __decorate([
        logging(true)
    ], Car1);
    return Car1;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant1 = /** @class */ (function () {
    function Plant1() {
        this.name = "Green Plant";
    }
    Plant1 = __decorate([
        logging(false),
        printable
    ], Plant1);
    return Plant1;
}());
var plant1 = new Plant1();
plant1.print();
// Method Decorator
// Property Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project1 = /** @class */ (function () {
    function Project1(name) {
        this.projectName = name;
    }
    Project1.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project1.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project1.prototype, "calcBudget", null);
    return Project1;
}());
var project = new Project1("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
