// 1)


console.log('=================question 1===================')
const person = {
  name: '',
  dateOfBirth: '',
  getName: function () {
    return this.name
  },
  setName: function (name) {
    this.name = name
  }
}

const john = Object.create(person, {
  name: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'john'
  },
  dateOfBirth: {
    value: new Date(2022, 4, 9)
  }
})
john.__proto__.toString = function () {
  return `The person’s name is ${john.name} \n${john.name} was born on ${john.dateOfBirth}`
}

console.log(john.toString())

// 2)

console.log('=================question 2===================')

const employee = Object.create(person, {
  name: {
    value: 'Anna'
  },
  salary: {
    value: 0
  },
  hireDate: {
    value: Date.now()
  },
  doJob: {
    value: function (input) {
      console.log(`${this.name} is a ${input} who earns ${this.salary}`)
    }
  }
})

const anna = Object.create(employee, {
  salary: {
    value: 249995
  }
})

anna.doJob('Programmer')

// 3)

console.log('=================question 3===================')

function Person (name, dateOfBirth) {
  this.name = name
  this.dateOfBirth = dateOfBirth
  this.getName = function () {
    return this.name
  }
  this.setName = function (val) {
    this.name = val
  }
  this.toString = function () {
    return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getDate()}}`
  }
}

const peter = new Person('Peter', new Date(1985, 11, 10))

console.log(peter.toString())
