const mod = (() => {
  let counter = 0
  const add = (inc) => {
    return function () {
      counter += inc
      return counter
    }
  }

  const reset = () => {
    return function () {
      counter = 0
      return counter
    }
  }

  const make_adder = (x) => {
    return add(x)
  }
  // const obj = {
  //   add: function () {
  //     return function () {
  //       counter += 1
  //       return counter
  //     }
  //   },
  //   reset: function () {
  //     return function () {
  //       counter = 0
  //       return counter
  //     }
  //   }
  // }
  // return obj

  return {
    add,
    reset,
    make_adder
  }
}
)()

const add5 = mod.make_adder(5) // function
console.log(add5())
console.log(add5())

// let add = (function () {
//   let counter = 0
//   return function () {
//     counter += 1
//     return counter
//   }
// }

// )()

// console.log(add())

console.log(counter)

// const bob = {
//   name: '',
//   log: function () {
//     this.name = 'hello'
//     const setName = name => {
//       this.name = name
//     }
//     setName('one')
//     console.log(this.name)
//   }
// }

// // bob.log()
// // console.log(bob.name)

// const person = {
//   age: 0,
//   add: function (n) {
//     this.age += n
//     console.log(this.age)
//   }
// }

// const sum = n => {
//   this.add(n)
//   console.log(this)
// }

// const newFunc = sum.bind(person)

// newFunc(5)

// // sum.call(person, 5)
