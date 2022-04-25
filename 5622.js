let input = require('fs').readFileSync('example.txt').toString().trim();

// (A, B, C => 65~67) => 3초
// (D, E, F => 68~70) => 4초
// (G, H, I => 71~73) => 5초
// (J, K, L => 74~76) => 6초
// (M, N, O => 77~79) => 7초
// (P, Q, R, S => 80~83) => 8초
// (T, U, V => 84~86) => 9초
// (W, X, Y, Z => 87~90) => 10초
// ...
// n번 => n + 1초

let callSec = 0;
for(let i = 0; i < input.length; i ++) {
  let sec = parseInt((input[i].charCodeAt() + 1) / 3) - 19
  if(input[i] === 'S') {
    sec = 8
  } else if(input[i] === 'V') {
    sec = 9
  } else if(input[i] === 'Y' || input[i] === 'Z') {
    sec = 10
  }
  callSec += sec
}
console.log(callSec)