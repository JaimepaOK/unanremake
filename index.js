const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Funcionando en el puerto: ${PORT}`);
});

/*const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('this should be a index.html')
    }
    res.end(`<h1> ¡OPA! </h1>
    <a href="/">home</a>
    `)
})

server.listen(5000)*/
