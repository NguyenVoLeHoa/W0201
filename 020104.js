const http = require("http");

const hostname = "localhost";

const port = 8000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<!DOCTYPE html> <html lang="vi">'
            + '<head> <meta charset="utf-8"> </head> '
            + '<body> <h1> Hello </h1> <hr> '
            + solan + '</body> </html>' 
        );
        console.log("--- request !!!", solan++);
    }
)

server.listen( port, hostname, 
    () => {
        console.log("Listen !!!");

    });
