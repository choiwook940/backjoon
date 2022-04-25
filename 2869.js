const [up, down, distance] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(el => parseInt(el))

console.log(Math.ceil((distance - up) / (up - down) + 1))
