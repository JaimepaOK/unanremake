const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("mongodb");

//port
const PORT = process.env.PORT || 5000;

const app = express();


app.listen(PORT, () => {
    console.log(`Funcionando en el puerto: ${PORT}`);
});