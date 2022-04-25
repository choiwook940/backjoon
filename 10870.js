let input = require('fs').readFileSync('example.txt').toString().trim()
input = parseInt(input)

function getFibo(n, beforeOne = 0, beforeTwo = 1) {
  if(n <= 1) {
    if(n === 0) return console.log('0') 
    return console.log(`${beforeTwo + beforeOne}`)
  }
  n --
  getFibo(n, beforeTwo + beforeOne, beforeOne)
}

getFibo(input)