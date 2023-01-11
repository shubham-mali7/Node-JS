// CRUD With file system

const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname, "CRUD");
const filePath = `${dirName}/ravi.txt`;
// fs.writeFileSync(filePath,`Ravi is Shubham's Younger brother`);

// fs.readFile(filePath ,"utf8" ,(err ,content)=>{
// console.log(content);
// });          ----> Read

// fs.appendFile(
//   filePath,
//   " and is currently persuing BSC Computer Science!",
//   (err) => {
//     if (!err) console.log("file is updated");
//   }
// );      -----------> Update

// fs.rename(filePath, `${dirName}/brother.txt`, (err) => {
//   if (!err) console.log("File renamed successfully!");
// });  --------------> Rename

fs.unlinkSync(`${dirName}/brother.txt`); //-------> Delete

// What is Buffer? ----> Temporary memory location
