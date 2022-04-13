const arr = []
const dArr = []

for(let i = 0; i < 10000; i++) {
  arr.push(i + 1)
  if(d(i + 1) <= 10000) dArr.push(d(i + 1))
}

const result = arr.filter(num => {
  return !dArr.includes(num)
})

function d(n) {
  const str = n.toString()
  return n + str.split('').reduce((acc, curr) => acc + parseInt(curr), 0)
}

for(let j = 0; j < result.length; j ++) {
  console.log(result[j])
}
