const fs=require("fs");
const zlib=require("zlib");

fs.createReadStream("../files/myfile_zip.txt")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("../files/myfile_zip.txt.gz"));

console.log("File compressed");
