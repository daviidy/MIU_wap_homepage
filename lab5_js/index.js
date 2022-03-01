'use strict'

// 1

const max = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log('//1')
console.log(max(2, 5))

// 2

const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3)
}

console.log('//2')
console.log(maxOfThree(2, 10, 5))

// 3

const isVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  if (vowels.includes(str)) {
    return true
  }
  return false
}

console.log('//3')
console.log(isVowel('a'))

// 4

const sum = (array) => {
  let res = 0
  for (let i = 0; i < array.length; i++) {
    res += array[i]
  }

  return res
}

console.log('//4')

console.log(sum([1, 2, 3, 4]))

const multiply = (array) => {
  let res = 1
  for (let i = 0; i < array.length; i++) {
    res *= array[i]
  }

  return res
}

console.log(multiply([1, 2, 3, 4]))

// 5

const reverse = (str) => {
  let res = ''
  const array = str.split('')
  for (let i = array.length - 1; i >= 0; i--) {
    res += array[i]
  }

  return res
}

console.log('//5')
console.log(reverse('david'))

// 6

const findLongestWord = (array) => {
  let res = 0
  array.forEach(element => {
    if (element.length > res) {
      res = element.length
    }
  })
  return res
}

console.log('//6')
console.log(findLongestWord(['david', 'armel', 'yao']))

// 7

const filterLongWords = (array, i) => {
  array.filter((item) => {
    return item.length > i
  })

  return array
}

console.log('//7')
console.log(filterLongWords(['david', 'armel', 'yao'], 3))

// 8

const computeSumOfSquares = (array) => {
  const res = array.reduce((previous, current) => {
    return Math.sqrt(previous) + Math.sqrt(current)
  }, 0)

  return res
}

console.log('//8')
console.log(computeSumOfSquares([1, 2, 3, 4]))

// 9

const printOddNumbersOnly = (array) => {
  array.forEach(element => {
    if ((element % 2) !== 0) {
      console.log(element)
    }
  })
}

console.log('//9')
printOddNumbersOnly([1, 2, 3, 4])
// 10

const computeSumOfSquaresOfEvensOnly = (array) => {
  let res = 0
  array.forEach(element => {
    if ((element % 2) === 0) {
      res += Math.sqrt(element)
    }
  })

  return res
}

console.log('//10')
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4]))

// 11

const sum2 = (array) => {
  return array.reduce((previous, current) => {
    return previous + current
  }, 0)
}

console.log('//11')

console.log(sum2([1, 2, 3, 4]))

const multiply2 = (array) => {
  return array.reduce((previous, current) => {
    return previous * current
  }, 1)
}

console.log(multiply2([1, 2, 3, 4]))

// 12

const findSecondBiggest = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
    }
  }
  return array[array.length - 2]
}

console.log('//12')
console.log(findSecondBiggest([19, 9, 11, 0, 12]))

// 13

const printFibo = (n, a, b) => {
  const nums = []
  let counter = 1
  let next

  nums.push(a, b)

  while (counter <= n) {
    next = a + b
    a = b
    b = next
    nums.push(next)
    counter++
  }
  for (let i = 1; i <= n; i++) {
    console.log(nums[i])
  }
}

console.log('//13')
printFibo(4, 0, 1)

// 14 - 15

window.onload = () => {
  const button1 = document.getElementById('button1')
  if (button1) {
    button1.addEventListener('click', (e) => {
      e.preventDefault()
      const inputs = document.querySelectorAll('#form1 input')
      for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value)
      }
    })
  }

  const button2 = document.getElementById('button2')

  if (button2) {
    button2.addEventListener('click', (e) => {
      e.preventDefault()
      let res = ''
      const inputs = document.querySelectorAll('#form2 input')
      for (let i = 0; i < inputs.length; i++) {
        res += inputs[i].value + '/'
      }
      alert(res)
    })
  }

  setInterval(() => {
    const timer = document.getElementById('clock')
    if (clock) {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

      timer.innerHTML = date
    }
  }, 1000)
}
