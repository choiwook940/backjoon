const [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/);

let count = 0
let answer = 0
for(let str in arr) {
  // 각 str 들의 문자열을 돌면서
    // i번째 문자가 i+1번째 문자와 다르고 && i + 1 + n(n > 1)번째 문자와 같은 문자이면 제외한다
    for(let i = 0; i < arr[str].length; i ++) {
      console.log(arr[str][i])
      if(arr[str][i] === arr[str][i + 1] || arr[str].indexOf(arr[str][i], i + 1) === -1) {
        console.log("count ++")
        count = 1
      } else {
        console.log("옆에 있는 것과 같지 않으며 중복 단어가 있음")
        count = 0
        break
      }
    }
    answer += count
}
console.log(answer)
