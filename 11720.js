// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('example.txt').toString().split('\n');
const a = parseInt(input[0]);
const b = input[1];

let sum = 0;
for(let i = 0; i < a; i ++) {
  sum += parseInt(b.toString()[i])
}

console.log(sum)