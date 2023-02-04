const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const dataBase = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("products");
}

module.exports = dbConnect;

// file in flow with readMongo2.js
