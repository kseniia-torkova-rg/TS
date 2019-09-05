const nums: number[] = [1, -3, 45, 101];
console.log(Math.max(21, 46, 35, 99));
console.log(Math.max(...nums));

function makeArray(name: string, ...args: number[]): void {
  console.log(name, args);
}

makeArray('ksenya', 2, 34, -109);
