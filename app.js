const validator =require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

const Msg =notes.getNotes()
console.log(chalk.bold.bgMagenta(Msg))
console.log(validator.isEmail('diamond789@example.com'))
console.log(validator.isURL('npmjs.com') + chalk.rgb(255,180,0).bold('\n npmjs.com'))

//yargs modification 
yargs.version('1.1.0')


// Create add command
//node app.js add --title='' --body=''
yargs.command({
    command:'add',
    describe:'Create a brand new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Brief note detail',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
      notes.addNotes(argv.title, argv.body)
    }
})
//Remove command
yargs.command({
    command:'remove',
    describe:'Deletes an existing command',
    handler: function() {
        console.log ('Removing the note')
    }
})
//list command
yargs.command({
    command:'list',
    describe:'Viewing all the notes',
    handler: function() {
        console.log ('Notes are being displayed')
    }
})
//Read command 
yargs.command({
    command:'read',
    describe:'Displays a specific note to read.',
    handler: function() {
        console.log ('Indcation of the note here')
    }
})

//console.log(yargs.argv) or the below 
yargs.parse()