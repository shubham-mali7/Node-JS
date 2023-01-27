// Route level Middleware -- ek route ke upar bhi lag sakta hai , group of route ke upar bhi lag sakta hai , or sare ke sare routs ke upar bhi lag sakta hai

const express = require("express");
const path = require("path");
const reqFilter = require("./middleware");

const app = express();
const route = express.Router();

// app.use(reqFilter); // application route ko hatado

route.use(reqFilter);
app.get("", (req, resp) => {
  resp.send("Welcome to Home Page");
});
app.get("/users", (req, resp) => {
  resp.send("Welcome to Users Page");
});
route.get("/about", (req, resp) => {
  resp.send("Welcome to about Page");
});
route.get("/contact", (req, resp) => {
  resp.send("Welcome to contact Page");
});

app.use("/", route);

app.listen(6400);
