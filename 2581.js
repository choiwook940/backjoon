const [a, b] = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => parseInt(el))

const newArr = []
const primes = []

for(let i = a; i <= b; i ++) {
  newArr.push(i)  
}

newArr.forEach((num, idx) => {
  let isPrime = true
  for(let i = 2; i <= num/2; i++) {
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

let sum = 0;
primes.forEach(li => {
  sum += li
})


if(sum === 0) {
  console.log(-1)
} else {
  console.log(sum)
  console.log(primes[0])
}

