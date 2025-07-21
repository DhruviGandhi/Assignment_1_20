const fs=require("fs");
const zlib=require("zlib");

fs.createReadStream("../files/myfile_zip.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("../files/myfile_zip2.txt"));

console.log("File unziped");
