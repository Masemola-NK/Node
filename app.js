const validator =require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const Msg =getNotes()
console.log(chalk.strikethrough.bgMagenta(Msg))

console.log(validator.isEmail('diamond789@example.com'))
console.log(validator.isURL('dhbkjbdefw98755git') + chalk.rgb(255,180,0).bold('\n dhbkjbdefw98755'))

//Process.Argv is the array created not only so but also indicate the path of the executable...
//Indicates the the directory where the exe is and also appends a value to the array when script is ran 
// Therefore the last appended array may be used as the command within a conditional statement
console.log(process.argv[2])

const id =process.argv[2]
if (id === 'add' ){
    console.log(chalk.green.bold.underline('\nAdding Note'))
}else if (id === 'remove'){
    console.log(chalk.red.italic.underline('\nRemoving Note'))
}
/*Now run command with the extension adding a note to the argv with string {node app.js add --tiltle='I iam the greatest'} */
console.log(process.argv)