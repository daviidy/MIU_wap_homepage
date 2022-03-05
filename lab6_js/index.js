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