const input = require('fs').readFileSync('example.txt').toString().trim();
const a = parseInt(input)

let answer = ''

for(let i = 0; i < a; i++) {
  answer += ('*'.repeat(i + 1)) + '\n'
}

console.log(answer)