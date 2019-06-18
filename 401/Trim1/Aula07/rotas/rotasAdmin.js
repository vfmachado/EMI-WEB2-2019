//utilizando o express..
//vamos criar um conjunto de rotas 
//para ser importado dentro do app.js

const express = require('express');
const path = require('path');

const meuRouter = express.Router();

meuRouter.get('/admin/usuarios', (req, res) => {
//    res.write("Oii... quero ver usuarios");
//    res.end();
//SENDFILE TRABALHA COM CAMINHOS ABSOLUTOS.. POR ISSO UTILIZAMOS O __DIRNAME
    res.sendFile(path.join(__dirname, '../', 'views', 'usuariosAdmin.html'));
    //res.sendFile('C:/dev/......./views/usuariosAdmin.html'); NÃO FUNCIONARÁ
});

meuRouter.get('/admin/encerrar-servidor', (req, res) => {
    //res.write("Oii... essa foi sua ultima requisicao MUAHAHAHAHHA");
    //res.end();
    process.exit();
});

module.exports = meuRouter;
