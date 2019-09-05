var nums = [1, -3, 45, 101];
console.log(Math.max(21, 46, 35, 99));
console.log(Math.max.apply(Math, nums));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name, args);
}
makeArray('ksenya', 2, 34, -109);
