let input = require('fs').readFileSync('example.txt').toString().trim();

function isHansu(n) {
  if(n < 100) return true
  else {
    n = n.toString()
    if(n[0] - n[1] === n[1] - n[2]) return true 
  }
  return false
}

let answer = 0;
while(input > 0) {
  if(isHansu(input)) answer ++
  input --
}

console.log(answer) 