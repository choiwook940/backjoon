// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

let [n, ...arr] = require('fs').readFileSync('example.txt').toString().split('\n');
const N = parseInt(n.split(' ')[0])
const X = parseInt(n.split(' ')[1])
const set = arr[0].split(' ')
let answer = ''
let list = set.filter(num => X > parseInt(num))
list.forEach(li => {
  answer += li + ' '
})
console.log(answer)