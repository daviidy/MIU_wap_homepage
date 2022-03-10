// function User (name) {
//   this.name = name
// }

// User.prototype.age = 20

// console.log(User.prototype)

class User {
  constructor (name) {
    this.name = name
  }

  showJob (input) {
    console.log(input)
  }
}

const user = new User('dave')

console.log(User.prototype)
