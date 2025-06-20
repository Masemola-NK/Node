const validator =require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')


const hmm =getNotes()
console.log(hmm)

const msg = chalk.bold.green('LEVITATE...')
console.log(msg)

console.log(validator.isEmail('diamond789@example.com'))
console.log(validator.isURL('dhbkjbdefw98755 :  ') + chalk.rgb(255,215,0).bold('\n dhbkjbdefw98755'))

// const add = require('./notes.js')
// const sum =add(99,-2)
// console.log(sum)
