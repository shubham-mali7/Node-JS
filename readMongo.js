const dbConnect = require("./mongodb");
// --- using then----promises
// dbConnect().then((res)=>{
//     return (res.find().toArray());
// }).then((data)=>{
//     console.log(data)
// })
// console.log(dbConnect());

// ------- using async await
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
