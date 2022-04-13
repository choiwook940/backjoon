const input = require('fs').readFileSync('example.txt').toString().trim();
var a = parseInt(input);

for(let i = 0; i < 9; i++){
  console.log(`${a} * ${i + 1} = ${a * (i + 1)}`)
}