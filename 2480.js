let input = require('fs').readFileSync('example.txt').toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

let reward;

if(a === b && b === c) {
  reward = 10000 + a * 1000
} else if(a === b || a === c) {
  reward = 1000 + a * 100
} else if(b === c) {
  reward = 1000 + b * 100
} else {
  if(a >= b && a >= c) {
    reward = a * 100
  } else if(b >= a && b >= c) {
    reward = b * 100
  } else {
    reward = c * 100 
  }
}
console.log(reward)