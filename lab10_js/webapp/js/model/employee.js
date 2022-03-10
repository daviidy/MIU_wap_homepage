import Person from './person.js'

class Employee extends Person {
  constructor (name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth)
    this.salary = salary
    this.hireDate = hireDate
  }

  doJob (val) {
    console.log(`${this.name} is a ${val} who earns ${this.salary}`)
  }
}

export default Employee
