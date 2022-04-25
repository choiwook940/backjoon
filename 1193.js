const input = require('fs').readFileSync('example.txt').toString().trim()

let floor = 1
let pointNumber = 1

while(pointNumber < input) {
  pointNumber += floor
  if(pointNumber > input) {
    pointNumber -= floor
    break
  } 
  floor ++
  console.log(`${pointNumber}는 ${floor}층의 첫 포인트`)
}

if(floor % 2 === 0) {
  console.log("짝수 층으로 분자가 1부터 증가")
  console.log(`${input}번째 분수는 ${floor}층의 ${input - pointNumber + 1}번째에 있는 ${input - pointNumber + 1}/${floor - input + pointNumber}입니다`)

} else {
  console.log("홀수 층으로 분모가 1부터 증가")
  console.log(`${input}번째 분수는 ${floor}층의 ${input - pointNumber + 1}번째에 있는 ${floor - input + pointNumber}/${input - pointNumber + 1}입니다`)

}

// 첫째 줄 분자 + 분모 = 2
// 둘째 줄 분자 + 분모 = 3
// 셋째 줄 분자 + 분모 = 4
// 
// 1줄 / 1번 => 1/1
// 2줄 / 2번 => 1/2
// 2줄 / 3번 => 2/1
// 3줄 / 4번 => 3/1
// 3줄 / 5번 => 2/2
// 3줄 / 6번 => 1/3
// 4줄 / 7번 => 1/4
// 4줄 / 8번 => 2/3
// 4줄 / 9번 => 3/2
// 4줄 / 10번 => 4/1
// 5줄 / 11번 => 5/1
// 5줄 / 12번 => 4/2
// 5줄 / 13번 => 3/3
// 5줄 / 14번 => 2/4
// 5줄 / 15번 => 1/5

