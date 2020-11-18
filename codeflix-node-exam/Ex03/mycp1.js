// 1
const fs = require("fs")

const CP = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
        console.log("Copied file1.txt to file2.txt successfully !")
    }
}
CP()
