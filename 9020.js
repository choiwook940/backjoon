let [n, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n')
arr = arr.map(el => parseInt(el))

const primes = []
arr.forEach(num => {
  primes.length = 0
  for(let j = 2; j <= num; j++) {
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
  console.log(primes)
  // 그 중에 있는 숫자들의 합으로 해당 숫자를 만들수 있나
  if(primes.length % 2 === 0) {
  // 재료가 짝수개일 때
  let i = 0;
  let indexA = parseInt(primes.length / 2)
  let indexB = parseInt(primes.length / 2)
  let plus

  while(i < primes.length) {
    plus = primes[indexA] + primes[indexB]
    console.log(`${num} =? ${primes[indexA]} + ${primes[indexB]}`)

    if(num === plus) {
      console.log(`숫자 ${num}의 재료 소수는 ${primes[indexA]}와 ${primes[indexB]}입니다`)
      break
    } else if (num > plus) {
      indexB ++

    } else {
      indexB --
    }
    i ++
  }
  } else {
  // 재료가 홀수개일 때
    let i = 0;
    let a = primes[parseInt(primes.length / 2)]
    let b = primes[parseInt(primes.length / 2) - 1]
    let plus = a + b

    while(i < primes.length) {
      plus = a + b
      console.log(`${num} =? ${a} + ${b}`)
  
      if(num === plus) {
        console.log(`숫자 ${num}의 재료 소수는 ${a}와 ${b}입니다`)
      } else if (num > plus) {
        b = primes[parseInt(primes.length / 2)]

      } else {
        b = primes[parseInt(primes.length / 2) - 2]
      }
      i ++
    }
  }
})
