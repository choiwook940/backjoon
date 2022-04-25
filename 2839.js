let N = require('fs').readFileSync('example.txt').toString().trim()

// N 킬로그램 배달
// 봉투는 3 & 5 를 최소한 사용해서 N을 만들기
// 3 & 5 를 사용해서 만들수 없는 숫자라면 -1 출력
N = parseInt(N)
let answer = -1;
let threeKGs = 0;
let fiveKGs = parseInt(N / 5);
let i = 0

while(i <= N / 3) {
  // console.log(`5kg : ${fiveKGs}, 3kg : ${threeKGs}`)
  if(N === 3 * threeKGs + 5 * fiveKGs) {
    answer = threeKGs + fiveKGs
    // console.log('완료')
    break
  } 
  if(fiveKGs === 0) {
    threeKGs ++
    fiveKGs = parseInt(N / 5)
    // console.log("?")
    i ++
  } else {
    fiveKGs --
  }
}

console.log(answer)