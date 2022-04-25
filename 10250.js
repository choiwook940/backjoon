const [n, ...input] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 0; i < n; i++) {
  let floorN = parseInt(input[i].split(' ')[0])
  let roomN = parseInt(input[i].split(' ')[1])
  let customerN = parseInt(input[i].split(' ')[2])

  // console.log(`층 ${floorN}개, 방 ${roomN}개 ${customerN}번째 손님`)

  let turn = 1
  let floorSet = 1
  let roomSet = 1
  while(turn < customerN) {
    turn ++
    floorSet ++
    if(floorSet > floorN) {
      floorSet = 1
      roomSet ++
    }
  }
  console.log(`${floorSet * 100 + roomSet}`)
}

// 세 정수 : 층수 / 층의 방수 / 몇번째 손님?

// N -호수- 층수
// 1 - 1 - 1
// 2 - 1 - 2
// 3 - 1 - 3
// 4 - 1 - 4
// 5 - 1 - 5
// 6 - 1 - 6 (H)

// 7 - 2 - 1
// 8 - 2 - 2
// 9 - 2 - 3
// 10 - 2 - 4
// 11 - 2 - 5
// 12 - 2 - 6

