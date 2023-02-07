const express = require("express");
const dbConnect = require("./mongoDB2");
const mongodb = require("mongodb");
const app = express();

app.use(express.json()); // -------Middleware

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  //   console.log(req.body); //------- postman sai data aanelaggaya node ke andar
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send(result);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send({ result: "updated" });
});

app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send({ result: "updated" });
});

app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(5400);
