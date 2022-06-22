const {people, word} = require('./people') 


// console.log(people)
// console.log(word)

//? os (operating system) module 
//used to get infos about operating system 

const os = require('os') //os is in core of node.js
console.log(os.platform()) //system name
console.log(os.homedir())  //home dirctory
