const [n, ...testCase] = require('fs').readFileSync('example.txt').toString().trim().split('\n')

// 입력(k층, n호) => 입주자00명

for(let i = 0; i < n; i++) {
  const floor = parseInt(testCase[i * 2])
  const room = parseInt(testCase[i * 2 + 1])
  const people = []

  for(let i = 0; i <= floor; i ++) {
    people.push([1])
    for(let j = 1; j < room; j ++) {
      if(i === 0) {
        people[i].push(j + 1)
      } else {
        people[i].push(people[i][j - 1] + people[i - 1][j])
      }
    }
  }

  // console.log(`${floor * 100 + room}호에 사는 사람은 ${people[floor][room - 1]}명입니다`)
  console.log(people[floor][room - 1])
}
