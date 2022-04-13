// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('example.txt').toString().trim();
var a = parseInt(input);

if(((a % 4 === 0) && !(a % 100 === 0))) console.log(1)
else if((a % 400) === 0) console.log(1)
else console.log(0)