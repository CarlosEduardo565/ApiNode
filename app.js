//Requering modules
const express = require('express');

//creating express object
const app = express();

//handiling GET request
app.get('/', (req,res)=> {
    res.send('Minha primeira API' + 'com node')
    res.end()
} )

//handiling GET request
app.get('/retorno', (req,res)=> {
    res.send('Minha primeira API' + ' Retorno')
    res.end()
} )

//port number
const PORT = process.env.PORT ||5000;

//Server Setup
app.listen(PORT,console.log('Server started on port ${PORT}'));
