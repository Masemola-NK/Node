const fs = require ('fs')


/*Below is to create a file and the adds information*/
fs.writeFileSync('note.txt','You have been got, Focus up JS is case sensitive buddy!!!')
console.log('Note has been UPDATED')

//Adding information to an existing file within a try catch for risk mitigation incase the file doesn't exist
try{
fs.appendFileSync('note.txt', '\n\nInformation appended to an exiting file')
console.log('\n\nThe information was added succesfully')
}catch(err){
    console.log('Well looks to be that the file you want to add information to does not exist')
}