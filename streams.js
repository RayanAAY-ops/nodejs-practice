const fs = require('fs');

const readStream = fs.createReadStream('./views/home.html', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('destination.txt');

// Event listener to data chunk
readStream.on('data', (chunk)=> {
    console.log("---- new chunk ----")
    console.log(chunk);
    writeStream.write(chunk)
})

// piping
readStream.pipe(writeStream)