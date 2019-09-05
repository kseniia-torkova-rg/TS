var nums = [1, -3, 45, 101];
console.log(Math.max(21, 46, 35, 99));
console.log(Math.max.apply(Math, nums));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(2, 34, -109));
