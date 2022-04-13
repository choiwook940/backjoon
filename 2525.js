let input = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/);

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
let h, m

if(b + c < 60) {
  h = a
  m = b + c
} else {
  m = (b + c) - parseInt((b + c) / 60) * 60  
  h = a + parseInt((b + c) / 60)
  if(h >= 24) {
    h = parseInt((b + c) / 60) + a - 24
  }
}

console.log(h, m)