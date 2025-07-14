const { default: chalk } = require('chalk')
const fs = require ('fs')


console.log('notes.js')
const getNotes =() => {
        const b ='Yargs helps you build interactive command line tools,\n by parsing arguments and generating an elegant user interface.'
        return (b)
} 
//ES6 utilising arrow function 

const addNotes= (title, body) => {
        const Notes= loadNotes()
        //const duplicateNotes = Notes.filter((n1)=>{n1.title===title})
        //short hand syntax seeing as all im doing is returning a comparsion

        const duplicateNote = Notes.find((n2 )=> {n2.title === title})

        /*const duplicateNotes = Notes.filter(function (n1) {
                return n1.title === title
        })*/

        if (!duplicateNote){
                 //push is a js array method that simple appends info to the last index...
                Notes.push({
                title:title,
                body:body
        })
        saveNotes(Notes)
        console.log(chalk.bold.bgGreen('New note has been added'))
        }else{
        console.log(chalk.bold.bgRed('Note of the title already exist'))
        }
        

}

const listNotes= ()=>{
        const notes= loadNotes()  
        console.log('Your Notes')

        notes.forEach((note) => {
                console.log(chalk.bold.yellow(note.title))
        });


}

const removeNote= (title) => {
        
        const notes = loadNotes()
        const notesToKeep = notes.filter((note)=>{note.title != title})

        if(notes.length > notesToKeep.length){
                console.log(chalk.bgGreen.bold('Note has been removed'))
                saveNotes(notesToKeep)
        }else {
                console.log(chalk.bgRed.inverse.bold('No note was not found'))
        }

} 

const saveNotes= (notes) => {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)

}

const readNotes=(title)=>{
        const notes=loadNotes()
        const note= notes.find((n1)=>{
                return n1.title === title})

        if(note){
                console.log (note.title)
                console.log (note.body)
        }else{
                console.log(chalk.bgRed.bold('Note not found...'))
        }
}

const loadNotes= () => {

        try{

        const databuffer= fs.readFileSync('notes.json')
        const dataJSON= databuffer.toString()
        return JSON.parse(dataJSON)

        }catch(e){
                return[]
        }
        
}


// const name = 'At-last'
// const add =function(p,b) {
//     return(p+b)
// }
module.exports= {
        getNotes: getNotes,
        addNotes: addNotes,
        removeNote: removeNote,
        listNotes: listNotes,
        readNotes:readNotes
}