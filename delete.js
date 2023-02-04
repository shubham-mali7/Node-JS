const dbConnect = require("./mongoDB2");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "BhagwatGeeta" });
  console.log(result);
  if (result.acknowledged) {
    console.log("record is deleted");
  }
};

deleteData();
