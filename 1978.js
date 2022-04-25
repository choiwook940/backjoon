
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

const [n, arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n')

newArr = arr.split(' ').map(el => parseInt(el))

// 1000이하의 숫자 N 개(<= 100) 중 소수인 숫자 구하기
  // 소수는 어떤 수인가? 1과 자신 이외의 공약수가 없음
    // num % 2 !== 0 && num % 3 !== 0 && 
      // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
const primes = []
newArr.forEach((num, idx) => {
  let isPrime = true
  for(let i = 2; i <= num/2; i++) {
    // console.log(`${num} % ${i} !== 0 => ${num % i !== 0}`)
    if(num % i === 0) {
      isPrime = false
      break
    }
    isPrime = true
  }
  // console.log(`${idx + 1}번째 수 ${num}는 ${isPrime} 소수입니다`)
  if(isPrime && num !== 1) {
    primes.push(num)
  }
})

console.log(primes.length)