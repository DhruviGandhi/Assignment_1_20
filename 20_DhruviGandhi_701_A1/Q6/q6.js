var fs=require("fs");

function unlinkFile (file) {
    return new Promise((resolve, reject) => {
      fs.unlink(file, (err, data) => {
        if (err) {
          return reject (err)
        }
        resolve("File deleted")
      })
    })
  }
  Promise.all([
    unlinkFile('../files/unlink_file.txt'),
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))