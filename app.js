const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path');

app.use(cors())


// app.use( (req, res, next) =>{
//     console.log('Ejecutando mw de fs write');
//     fs.appendFile('ips.txt', `\n new ip: ${req.connection.remoteAddress}`, function(err) {
//         if(err) return console.error(err);
//     });
//     next()
// })

app.get('/', (req, res, next) => {
    //res.send({"respose": "server okay"})
    console.log('Ejecutando mw de fs write');
    fs.appendFile('ips.txt', `\n new ip: ${req.connection.remoteAddress}`, function(err) {
        if(err) return console.error(err);
    });
    next()
})


app.use(express.static(path.join(__dirname, 'Templates')));

app.listen(3001, () => {
    console.log(`app is running on port 3001`);
    
})

module.exports = app