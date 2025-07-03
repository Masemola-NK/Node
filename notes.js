const { default: chalk } = require('chalk')
const fs = require ('fs')


console.log('notes.js')
const getNotes =function(){
        const b ='Yargs helps you build interactive command line tools,\n by parsing arguments and generating an elegant user interface.'
        return (b)
} 

const addNotes= function (title, body){
        const Notes= loadNotes()
        const duplicateNotes = Notes.filter(function (n1){
                return n1.title === title
        })

        if (duplicateNotes.length === 0){
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

const saveNotes= function (notes){
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes= function(){

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
        addNotes: addNotes
}