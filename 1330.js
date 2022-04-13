// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

let input = require('fs').readFileSync('example.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a > b) console.log(">")
else if(a < b) console.log("<")
else console.log("==")
