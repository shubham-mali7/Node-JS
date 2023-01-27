const { response } = require("express");
const { MongoClient } = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dataBase = "e-commerce";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(dataBase);
  let collection = db.collections("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData().then((resp) => {
  console.log(resp);
});
