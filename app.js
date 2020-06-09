const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const dotenv = require('dotenv').config()


app.use(cors())
app.get('/', (req, res, next) => {
    
    console.log('Ejecutando mw de fs write');
    fs.appendFile('public/ips.txt', `\n new ip: ${JSON.stringify(req.headers['client-ip'])} Fecha: ${new Date()}`, function(err) {
        if(err) return console.error(err);
    });
    next()
})


app.get('/logs', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/ips.txt'))
})


app.use(express.static(path.join(__dirname, 'Templates')));
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})

module.exports = app