const [a, b] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(el => BigInt(el))
const answer = a + b
console.log(answer.toString())