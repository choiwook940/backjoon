const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = '';
let n = 0;
rl.on('line', line => {
  const input = line.split(' ');
  if(input.length === 2) {
    n ++;
    const a = parseInt(input[0])
    const b = parseInt(input[1])
    answer += `Case #${n}: ` + (a + b) + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})
