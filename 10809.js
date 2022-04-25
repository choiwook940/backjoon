const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = '';
rl.on('line', line => {
  const input = require('fs').readFileSync('example.txt').toString().trim();

  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
               'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
               's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  for(let i = 0; i < arr.length; i ++) {
    answer += input.indexOf(arr[i]) + ' '
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})