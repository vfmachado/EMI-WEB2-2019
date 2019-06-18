
const express = require('express');
const path = require('path');
const meuRoteador = express.Router();

meuRoteador.get('/admin/usuarios', (req, res) => {
    //res.write("Lista de usuarios cadastrados");
    //res.end();
    //res.sendFile('C:\\dev\\EMI-WEB2-2019\\402\\Aula07\\views\\usuariosAdmin.html');
    let caminho = path.join
        (__dirname, "../", "views", "usuariosAdmin.html");
    res.sendFile(caminho);
});

meuRoteador.get('/admin/derrubar-sistema', (req, res) => {
    process.exit(); //termina o processo node - MATA O SERVER
});

module.exports = meuRoteador;