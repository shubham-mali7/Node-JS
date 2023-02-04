const dbConnect = require("./mongoDB2");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Shoe Dog" },
    { $set: { Price: 100, name: "Shoe-Dog A Memoir by Phill Knight" } }
  );
  console.log(result);
};

updateData();
