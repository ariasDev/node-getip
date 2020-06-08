const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const dotenv = require('dotenv').config()


app.use(cors())
app.get('/', (req, res, next) => {
    
    console.log('Ejecutando mw de fs write');
    fs.appendFile('ips.txt', `\n new ip: ${req.connection.remoteAddress}`, function(err) {
        if(err) return console.error(err);
    });
    next()
})


app.use(express.static(path.join(__dirname, 'Templates')));
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

module.exports = app