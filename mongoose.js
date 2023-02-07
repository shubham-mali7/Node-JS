const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  cost: Number,
  category: String,
});

const saveInDb = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "vivo-CS",
    brand: "Vivo",
    cost: 1000,
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "Nokia-222" },
    { $set: { brand: "Nokia-Modified", name: "Nokia-225", cost: 300 } }
  );
  console.log(data);
};

const deleteInDb = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "m8" });
  console.log(data);
};

const findInDb = async () => {
  const Product = new mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log(data);
};

findInDb();
