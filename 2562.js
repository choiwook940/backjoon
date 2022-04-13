let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let numbers = input.map(function(cur) {
  return Number(cur);
});

let max = numbers[0];
let index = 0;

numbers.forEach((num, idx) => {
  if(max < num) {
    max = num
    index = idx
  }
})

console.log(max + "\n" + (index + 1));
