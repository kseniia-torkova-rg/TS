var MyMath;
(function (MyMath) {
    var PI = 3.14;
    // чтобы элемент пространства имен (функция, переменная и т.п.) был доступен за пределами своего пространства имен, его нужно экспортировать
    // экспорт происходит с помощью ключевого слова export
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
