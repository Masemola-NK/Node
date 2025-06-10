const fs = require ('fs')


/*Below is to create a file and the adds information*/
fs.writeFileSync('note.txt','You have been got, Focus up JS is case sensitive buddy!!!')
console.log('Note has been UPDATED')

//Adding information to an existing file
fs.appendFileSync('note.txt', '\n\nInformation appended to an exiting file')
