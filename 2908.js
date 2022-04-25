let [a, b] = require('fs').readFileSync('example.txt').toString().trim().split(' ');

let newA = newB = ''
for(let i = 2; i >= 0; i --) {
  newA += a[i]
  newB += b[i]
}

if(newA > newB) console.log(newA)
else console.log(newB)