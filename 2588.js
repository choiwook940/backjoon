let input = require('fs').readFileSync('example.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a * (b % 10));
console.log(a * (b % 100 - (b % 10)) / 10);
console.log(a * (b % 1000 - (b % 100)) / 100);
console.log(a * (b % 10) + a * (b % 100 - (b % 10)) + a * (b % 1000 - (b % 100)))
