const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();


const posts = require('./controllers/data.js');
app.use('/data/nombres', posts);

const PORT = process.env.PORT || 5000;



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