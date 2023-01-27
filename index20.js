const { MongoClient } = require("mongodb");
// const MongoClient = require ('mongodb').MongoClient
const url = "mongodb://0.0.0.0:27017/";
const dataBase = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(dataBase);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();
