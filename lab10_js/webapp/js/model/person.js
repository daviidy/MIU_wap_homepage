class Person {
  constructor (name, dateOfBirth) {
    this.name = name
    this.dateOfBirth = dateOfBirth
  }

  getName () {
    return this._name
  }

  setName (name) {
    this._name = name
  }

  getDateOfBirth () {
    return this._dateOfBirth
  }

  setDateOfBirth (date) {
    this._dateOfBirth = date
  }

  toString () {
    return `{ Name: ${this.name}, DateOfBirth: ${this.dateOfBirth} }`
  }
}

export default Person
