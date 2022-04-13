const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

arr.forEach(score => {
  let sum = 0;
  let extra = 0;
  for(let i = 0; i < score.length; i++) {
    if(score[i] === "O") {
      extra ++
    } else {
      extra = 0;
    }
    sum += extra
  }  
  console.log(sum, extra)
})
