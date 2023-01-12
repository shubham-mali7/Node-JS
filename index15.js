const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
// console.log(publicPath);
app.listen(6200);

// http://localhost:6200/about.html
// http://localhost:6200
// http://localhost:6200/help.html
