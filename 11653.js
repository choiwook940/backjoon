let input = require('fs').readFileSync('example.txt').toString().trim()

let num = parseInt(input)
let x = 2

while(num > 1) {
  if(num % x === 0) {
    console.log(x)
    num = num / x
  } else {
    x ++
  }
}