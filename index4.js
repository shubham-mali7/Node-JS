const http = require("http");

const dataControl = (req,resp) => {
  resp.write("<h1>Hello this is Shubham</h1>");
  resp.write("Hello this is Shubham Mali");
  resp.end();
};

http.createServer(dataControl).listen(2006);

// const a = 20;
// console.log(a / 2);
// console.log("Right answer");
