const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/);

scores = arr.map((el)=>parseInt(el))

let max = 0;
let sum = 0

scores.forEach(score => {
  if(score > max) {
    max = score
  }
})

scores.forEach(score => {
  sum += score/max*100
})

console.log(sum/scores.length)