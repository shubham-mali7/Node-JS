const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "Shubham",
    lastName: "Mali",
    email: "sam@gmail.com",
    city: "Mumbai",
    roll: 2233,
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "MongoDM",
      "Express",
      "React",
      "Node",
      "Git",
    ],
  };
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (req, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/404.html`); // if wrong url is entered --this will be the bydefault view page
});

app.listen(6300);

// http://localhost:6300/
// http://localhost:6300/about.html
// http://localhost:6300/help.html

//-------> removed extensions

// http://localhost:6300/
// http://localhost:6300/about
// http://localhost:6300/help

//------> Dynamic
// http://localhost:6300/profile
// http://localhost:6300/login
