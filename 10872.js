let input = require('fs').readFileSync('example.txt').toString().trim()
input = parseInt(input)
// 팩토리얼 구하기 : n 입력 => n * n-1 * ...

// 함수에 현재 입력받은 값을 전달한다
function getFactorial(input, result = input) {
  // result를 선언하고 result에 첫번째 계산(input * input-1)을 할당한다
  if(input >= 2) {
    result = result * (input-1)
  } else if(input === 1) {
    console.log(result)
    return
  } else if(input === 0) {
    console.log(1)
    return
  }

  // console.log(`result : ${result} , input : ${input}`)

  getFactorial(input - 1, result)
}

getFactorial(input)