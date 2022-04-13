const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n');


for(let i = 0; i < n; i++) {
  let newArr = arr[i].split(' ').map(el => parseInt(el))
  let sum = 0; 
  let avg = 0;
  let howManyBelow = 0;
  for(let j = 1; j <= newArr[0]; j++) {
    sum += newArr[j]
  }
  avg = sum / newArr[0]
  for(let k = 1; k <= newArr[0]; k++) {
    if(newArr[k] > avg) {
      howManyBelow ++
    }
  }
  console.log((howManyBelow / newArr[0] * 100).toFixed(3) + '%')
}
