/* ANTES DO EXPRESS
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/ok") {
        res.write("OK alterado");
        res.end();
    } else {
        res.write("Qualquer outra URL diferente de /ok =D");
        res.end();
    }
});

server.listen(3000);
*/

//import do express
const express = require('express');

const app = express(); 

//BLOCO DE CÓDIGOS...
app.use('/ok', (req, res) => {
    res.write("OK com express");
    res.end();
});

app.use('/', (req, res) => {
    res.write("Voce solicitou a pagina "  + req.url);
    res.end();
});

app.listen(3000);