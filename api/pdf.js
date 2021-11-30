const { Router } = require("express");
const router = Router();

const path = require("path");
const fs = require("fs");

/* buscar el path del pdf en la carpeta public */
const dirPath = path.join(__dirname, "public/pdfs");

/* creamos la variable que alamcenara el url y nombre del pdf */
/*const files = fs.readdirSync(dirPath).map(name => {
    return {
        name: path.basename(name, ".pdf"),
        url: `/pdfs/${name}`
    };
});*/

const name = [];
const i = 0;

const data = fs.readdir(dirPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        name[i] = file;
        i == i + 1;
    });
});



router.get('/pdf/:name', (req, res, next) => {
    var options = {
        root: path.join(__dirname, 'public/pdfs'),
    }
    var fileName = req.params.name
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err)
        }
    })
})

module.exports = router