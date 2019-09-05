const nums: number[] = [1, -3, 45, 101];
console.log(Math.max(21, 46, 35, 99));
console.log(Math.max(...nums));

function makeArray(...args: number[]) {
  return args;
}

console.log(makeArray(2, 34, -109));
