const findFirstN = (n, arr) => {
  if (n > arr.length) {
    console.log('Error: Insufficient items')
  } else {
    const res = []
    for (let i = 0; i < n; i++) {
      res.push(arr[i])
    }
    return res
  }
}

const arr = [1,3,6,2]
const n = 3

console.log(findFirstN(n, arr))
