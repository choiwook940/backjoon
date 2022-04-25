const [a, b] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(el => parseInt(el))

const arr = []
let answer = ''
for(let i = 0; i <= b; i++){
  arr.push(true)
}

arr[0] = arr[1] = false

for(let i = 2; i <= b; i++){
  if(arr[i]){
    for(let j = 2; j <= b/i; j++) {
      arr[i*j] = false
    }
  }
}

for(let i = a; i < arr.length; i ++) {
  if(arr[i]) answer += i + '\n'
}
console.log(answer.trim())