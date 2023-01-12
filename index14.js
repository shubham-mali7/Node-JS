const express = require("express");
const app = express();
app.get("", (req, resp) => {
  console.log("data sent by browser >>>", req.query.name);
  resp.send(
    `<h1> Welcome ${req.query.name}, this is Home Page </h1> <a href = "/about">Check the About page</a><br> <a href = "/help">Check incase you need help </a>`
  );
});
app.get("/about", (req, resp) => {
  resp.send([
    {
      name: "Svadhyay Productions",
      type: "Films and Entertainment",
    },
    {
      name: "Versatile Entertainment",
      type: "Films and Entertainment",
    },
    {
      name: "Astitva Productions",
      type: "Films and Entertainment",
    },
    {
      name: "Kalamanthan Theatres and Productions",
      type: "Films and Entertainment",
    },
  ]);
});
app.get("/help", (req, resp) => {
  resp.send(`
    <input type = 'text' placeholder = 'Type Name' value = "${req.query.name}"/>
    <button>Click</button>
    <a href = "http://localhost:5200/?name=Shiva">Check the Home page</a><br>
    `);
});

app.listen(5200);
