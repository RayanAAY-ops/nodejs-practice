const fs = require('fs')

// Reading File
fs.readFile("home.html", (err, data) => {
    console.log(data)
    console.log(data.toString())
})

// Writing File
fs.writeFile("tmp.txt", 'hello world', () => {
    console.log("written complete")
})

// Making directory
// Run only if it does not exist
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("created")
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log("folder deleted")
    })
}


// Delete files
// CHeck if it exists first

if (fs.existsSync("tmp.txt")) {
    fs.unlink('tmp.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("file deleted")
    })
}