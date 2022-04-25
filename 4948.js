const arr = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(el => parseInt(el))
const primes = []

arr.forEach((num, idx) => {
  if(num === 0) return 

  primes.length = 0

  for(let j = num + 1; j <= num * 2; j++){
    let isPrime = true
    for(let i = 2; i <= j / i; i++){
      if(j % i === 0) {
        isPrime = false
        break
      }
    }
    if(isPrime) {
      primes.push(j)
    }
  }
  console.log(`${primes.length}`)
})
