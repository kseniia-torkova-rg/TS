var MyMath;
(function (MyMath) {
    // пространство имен может вкладываться в другое пространство имен, при это для использования извне вложенное пространство имен нужно экспортировать
    var Rectangle;
    (function (Rectangle) {
        function calculateRectangle(width, length) {
            return width * length;
        }
        Rectangle.calculateRectangle = calculateRectangle;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
