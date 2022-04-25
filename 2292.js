const input = require('fs').readFileSync('example.txt').toString().trim()

let i = 1;
let sum = 1;

while (sum < input) {
  console.log(sum)
  sum += 6 * i;
  i++;
}

console.log(i);