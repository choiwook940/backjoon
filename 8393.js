const input = require('fs').readFileSync('example.txt').toString().trim();

const a = parseInt(input)
let sum = 0;
for(let i = 0; i < a; i++) {
  sum += (i + 1) 
}
console.log(sum)