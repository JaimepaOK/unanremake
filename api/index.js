const express = require('express')
const app = express()

const hello = require('./hello')
app.use(hello)

/* usamos la ruta de pdfs */
const pdfs = require('./pdf')
app.use(pdfs)

if (require.main === module) {
    const port = 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

module.exports = app