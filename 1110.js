const input = require('fs').readFileSync('example.txt').toString().trim();
let a = parseInt(input)
let cycle = 0;
let c1 = a;
let left
let right

while(true) {
  left = parseInt(c1 / 10)
  right = c1 % 10
  c1 = right * 10 + (left + right) % 10
  cycle ++
  if(a === c1) break
}

console.log(cycle)



