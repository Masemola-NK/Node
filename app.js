const validator =require('validator')
const getNotes = require('./notes.js')


const hmm =getNotes()
console.log(hmm)

console.log(validator.isEmail('diamond789@example.com'))
console.log(validator.isURL('dhbkjbdefw98755'))

// const add = require('./notes.js')
// const sum =add(99,-2)
// console.log(sum)
