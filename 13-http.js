const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }

  res.end(`
    <h1>Ooops GOblog</h1>
    <p>Link yang dituju gak ada ygy</p>
    <a href="/">balik lagi sono</a>
  `);
});

server.listen(5000);
