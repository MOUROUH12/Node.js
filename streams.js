
// Streams : start using data before it has finished loading 

const  fs  = require('fs') 

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'}) 
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data',(chunk) => {
//     console.log('----------New chunk----------');
//     console.log(chunk);

//     writeStream.write('\n----------New chunk----------\n')
//     writeStream.write(chunk)

// })

// ? piping
// from readable stream to writable stream 
readStream.pipe(writeStream) //save as commented above