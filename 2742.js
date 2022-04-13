// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('example.txt').toString().trim();
const a = parseInt(input)

let answer = ''

for(let i = a; i > 0; i--) {
  answer += i + '\n'
}

console.log(answer)