const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "files");
console.log(dirName);

// fs.writeFileSync('check.txt', 'I am checking where its created');

for (i = 0; i < 5; i++) {
  fs.writeFileSync(
    `${dirName}/ hello-${i}.txt`,
    `a simple text file in fileno-${i}`
  );
}

// fs.readdir(dirName, (err, files)=>{
//     console.log(files);
// })

fs.readdir(dirName, (err, files) => {
  files.forEach((items) => {
    console.log(items);
  });
});
