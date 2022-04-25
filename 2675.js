let [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let result = ''

for(let i = 0; i < n; i ++) {
  // 반복 횟수를 떼어낸다
  const repeat = arr[i].split(' ')[0] // 3, 5...
  const string = arr[i].split(' ')[1] // ABC, /HTP...

  // 문자 개수 만큼 반복한다
  for(let j = 0; j < string.length; j ++) {
    for(let k = 0; k < repeat; k ++) {
      result += string[j]
    }
    
  }
  console.log(result)

}
