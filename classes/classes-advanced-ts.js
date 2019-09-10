// в typescript есть возможность создавать классы, которые по умолчанию не могут быть использованы самостоятельно как шаблон объекта
// абстрактные классы создаются для того, чтобы от них наследовать и создавать новые, более специфичные и расширенные классы на их основе
// объявление абстрактного класса начинается в ключевого слова abstract
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
// внутри абстрактных классов объявляются свойства, методы, геттеры, сеттеры, статические свойства и статические методы
// в абстрактных классах можно определять также абстрактные методы
// абстрактные методы объявляются, начиная с ключевого слова abstract
// в абстрактных методах не описывается логика их работы, можно указать только аргументы метода и их тип, а также тип значения, которое должна вернуть функция
// абстрактный метод должен быть обязательно указан в классе-наследнике
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
// ***
// Singletons and private constructors
// ***
// некоторые классы создаются только для того, чтобы использовать непосредсвенно их, не наследуя и не расширяя
// в таком случае их статические свойства и методы, конструктор и т.д. могут быть изначально обозначены как приватные, чтобы избежать изменения этого класса извне
// в данном случае класс отвечает за создание одного экземпляра объекта и создаст его при вызове только в том случае, если этот объект не был создан ранее
// чтобы свойства из конструктора нельзя было изменять извне, их можно получать с помощью геттера, если сеттер при этом не объявлен
// также сделать свойство доступным только для чтения позволяет ключевое слово readonly
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// при попытке использовать класс с приватным конструктором для создания объекта возникнет ошибка
// let wrong = new OnlyOne('The Only One');
// обратиться к классу с приватным конструктором можно только, вызвав его метод
var right = OnlyOne.getInstance();
console.log(right.name);
