const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello I am shubham mali");
    // resp.write("<h1>Hello I am shubham mali</h1>");xe
    resp.end();
  })
  .listen(4500);
