const http = require("http");
var fs = require("fs");
const hostname = "localhost";
const port = 8000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    console.log("Request!!!");
    switch (req.url) {
        case "/home":
            res.writeHead(200);
            var data = fs.readFileSync("./view/home.html");
            res.end(data.toString());
            break;
        case "/about":
            res.writeHead(200);
            res.end("<h1>This is About page</h1>");
            break;
        case "/login":
            res.writeHead(200);
            res.end("<h1>This is Login page</h1>");
            break;
        case "/logout":
            res.writeHead(200);
            res.end("<h1>This is Logout page</h1>");
            break;
        case "/signin":
            res.writeHead(200);
            res.end("<h1>This is Signin page</h1>");
            break;
        case "/contact":
            res.writeHead(200);
            res.end("<h1>This is Contact page</h1>");
            break;
        case "/order":
            res.writeHead(200);
            res.end("<h1>This is Order page</h1>");
            break;
        default: {
            res.writeHead(200);
            res.end("<h1>ERROR!!!</h1>");
            break;
        }
    }
});

server.listen(port, hostname, () => {
    console.log("Listen !!!");
});