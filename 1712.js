const [fc, vc, price] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(el => parseInt(el))

let answer = 0
if(vc >= price) {
  answer = -1
} else {
  answer = Math.floor(fc / (price - vc)) + 1
}

console.log(answer)