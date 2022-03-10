import Person from './model/person.js'
import Employee from './model/employee.js'

const arr = [
  new Person('Ana Smith', new Date(1998, 11, 15)),
  new Person('Bob Jone', new Date(1945, 10, 16)),
  new Person('Carlos Slim', new Date(1976, 8, 24))
]

console.log('================question 1=================')
arr.forEach(val => {
  console.log(val.toString())
})

console.log('================question 2==================')

const employee = new Employee('Jim Hanson', new Date(1998, 19, 14), 245990.00, new Date(2022, 5, 6))

employee.doJob('Software Engineer')
