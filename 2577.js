// 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let numbers = input.map(function(cur) {
  return Number(cur);
});

let zero = one = two = three = four = five = six = seven = eight = nine = 0;
const multipled = numbers[0] * numbers[1] * numbers[2]
const string = multipled.toString()

for(let i = 0; i < string.length; i++) {
  switch(string[i]) {
    case "0":
      zero ++
      break
    case "1":
      one ++
      break
    case "2":
      two ++
      break
    case "3":
      three ++
      break
    case "4":
      four ++
      break
    case "5":
      five ++
      break
    case "6":
      six ++
      break
    case "7":
      seven ++
      break
    case "8":
      eight ++
      break
    case "9":
      nine ++
      break
  }
}

const answer = zero 
+ '\n' + one
+ '\n' + two 
+ '\n' + three  
+ '\n' + four
+ '\n' + five
+ '\n' + six
+ '\n' + seven 
+ '\n' + eight
+ '\n' + nine

console.log(answer)