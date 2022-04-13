// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
  if(input.length === 2 && input[0] !== '0' && input[1] !== '0') {
    const a = parseInt(input[0])
    const b = parseInt(input[1])
    answer += a + b + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})
