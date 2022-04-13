let input = require('fs').readFileSync('example.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
let h, m;

if(b >= 45) {
  m = b - 45
  h = a
} else {
  m = b + 60 - 45
  if(a > 0){
    h = a - 1;
  } else {
    h = 23;
  }
}

console.log(h, m)