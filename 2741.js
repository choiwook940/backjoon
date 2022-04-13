// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

const input = require('fs').readFileSync('example.txt').toString().trim();
const a = parseInt(input)

let answer = ''

for(let i = 0; i < a; i++) {
  answer += (i + 1) + '\n'
}

console.log(answer)