let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const answer = []
input.forEach(num => answer.indexOf(num % 42) === -1 && answer.push(num % 42))

console.log(answer.length)