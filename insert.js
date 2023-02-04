const dbConnect = require("./mongoDB2");

const insert = async () => {
  let db = await dbConnect();
  let result = await db.insertMany([
    {
      name: "7 Steps of transformation",
      writer: "SirShree",
      cost: 20,
      category: "Book",
    },
    {
      name: "Lord of Rings",
      writer: "Drek Alexander",
      cost: 200,
      category: "Book",
    },
    {
      name: "The Golden Era",
      writer: "Raj Shastri",
      cost: 150,
      category: "Book",
    },
  ]);

  if (result.acknowledged) {
    console.log("data is inserted sir!");
  }
};

insert();
