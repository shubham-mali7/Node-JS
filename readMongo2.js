const dbConnect = require("./mongoDB2");

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();


// file in flow with mongoDB2.js
//   [ ------------------------> OUTPUT
//     {
//       _id: new ObjectId("63d39f24b11c98293a98de26"),
//       name: 'm-40',
//       brand: 'Samsung',
//       Price: 250,
//       category: 'Mobile'
//     },
//     {
//       _id: new ObjectId("63d39f80b11c98293a98de27"),
//       name: 'j5-Prime',
//       brand: 'Samsung',
//       Price: 350,
//       category: 'Mobile'
//     },
//     {
//       _id: new ObjectId("63d39fb6b11c98293a98de28"),
//       name: 'Zero to One',
//       writer: 'Peter Theil',
//       Price: 50,
//       category: 'Book'
//     },
//     {
//       _id: new ObjectId("63d39fdfb11c98293a98de29"),
//       name: 'Shoe-Dog',
//       writer: 'Phill Knight',
//       Price: 60,
//       category: 'Book'
//     },
//     {
//       _id: new ObjectId("63d3a014b11c98293a98de2a"),
//       name: 'Peter England',
//       Type: 'Suit',
//       Price: 100,
//       category: 'Clothes'
//     },
//     {
//       _id: new ObjectId("63d3a09bb11c98293a98de2b"),
//       name: 'Iphone-14',
//       brand: 'Apple',
//       Price: 1250,
//       category: 'Mobile'
//     }
//   ]
