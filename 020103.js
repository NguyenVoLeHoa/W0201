const http = require("http");

const hostname = "localhost";

const port = 8000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end('{"message" : "Hello" , "Num." : '+ solan +' }' );
        console.log("--- request !!!", solan++);
    }
)

server.listen( port, hostname, 
    () => {
        console.log("Listen !!!");

    });
