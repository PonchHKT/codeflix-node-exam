// 1
const fs = require("fs")
const path = require("path")

const CP = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
        console.log("Copied file1.txt to file2.txt successfully !")
    }
}
CP()

// 2
const pathResolve = path.resolve('dir1', 'dir2.txt')
fs.copyFile(pathResolve, function(err) {
    if (err) {
        throw err
    } else {
        console.log("Sucess")
    }
})


// CAN'T FIND ANY SOLUTION............