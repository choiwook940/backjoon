let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let count = Number(input[0]);
console.log(count)
let numberStr = input[1].split(' ');
console.log(numberStr)

let numbers = numberStr.map(function(cur) {
  return Number(cur);
});
console.log(numbers)

let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(`${min} ${max}`);
