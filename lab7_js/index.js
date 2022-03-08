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

  return {
    add,
    reset,
    make_adder
  }
}
)()

const Employee = (() => {
  let name = 'dave'
  let age = 12
  let salary = 300000
  let address = ''

  const setAge = (newAge) => {
    age = newAge
  }

  const setSalary = (newSalary) => {
    salary = newSalary
  }

  const setName = (newName) => {
    name = newName
  }

  const setAddress = (newAddress) => {
    address = newAddress
  }

  const getAddress = () => {
    return address
  }

  const getAge = () => {
    return age
  }

  const getName = () => {
    return name
  }

  const getSalary = () => {
    return salary
  }

  const increaseSalary = (percentage) => {
    let salary = getSalary()
    salary += (salary * (percentage / 100))
    setSalary(salary)
  }

  const increaseAge = (num) => {
    const age = getAge()
    setAge(age + num)
  }

  return {
    setAge,
    setSalary,
    setName,
    getAge,
    getName,
    getSalary,
    increaseSalary,
    increaseAge,
    setAddress,
    getAddress
  }
}
)()

Employee.setAge(20)
console.log(Employee.getAge())
