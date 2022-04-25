let input = require('fs').readFileSync('example.txt').toString().trim();
let count = 0;
input.split(' ').forEach(element => {
  if(element !== '') count ++
  return count
})

console.log(count)