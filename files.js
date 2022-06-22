const fs = require('fs')

//? reading files  fs.readFile(path,callback)
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log(data.toString())
// })
//? writing files  (override,craete)

// fs.writeFile('./docs/blog1.txt','Somthing new',() => {
//     console.log('file was written')
// })
// fs.writeFile('./docs/blog2.txt','Somthing new 2',() => {
//     console.log('file was written')
// })
//? directions
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets',(err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log("Folder was created");
//     })
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('Folder was deleted')
//     })
// }

//? deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) => {
       if(err){
        console.log(err);
       }
       else {
        console.log('file')
       }
    })
}
