const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 0; i < n; i++) {
  console.log(parseInt(arr[i][0]) + parseInt(arr[i][2]))
}