let input = require('fs').readFileSync('example.txt').toString().trim().toUpperCase();

const obj = {
  A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0,
  J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, 
  S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0
}

for(let i = 0; i < input.length; i ++) obj[input[i]] ++

let max = maxIdx = maxSame = 0;
for(let i in obj) { 
  if(obj[i] > max) {
    max = obj[i]
    maxIdx = i
  } else if (obj[i] === max) {
    maxSame ++
    maxIdx = '?'
  } else {
    maxSame = 0;
  }
}
console.log(maxIdx)
