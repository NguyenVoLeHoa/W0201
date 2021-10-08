const http = require("http");

const hostname = "localhost";

const port = 8000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.end("Hello !!!" + solan);
        console.log("--- request !!!", solan++);
    }
)

server.listen( port, hostname, 
    () => {
        console.log("Listen !!!");

    });
