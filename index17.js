// Application level Middleware -- ek middleware banadia toh vo sare ke sare routs pai apply hojata hai

const express = require("express");
const path = require("path");

const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide age!");
  } else if (req.query.age < 18) {
    resp.send("You cannot access this page!");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("", (req, resp) => {
  resp.send("Welcome to Home Page");
});
app.get("/users", (req, resp) => {
  resp.send("Welcome to Users Page");
});

app.listen(6400);
