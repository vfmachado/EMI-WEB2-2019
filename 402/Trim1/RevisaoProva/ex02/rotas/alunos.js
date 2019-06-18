
const express = require('express');
const path = require('path');
const roteador = express.Router();

todosAlunos = [];

roteador.get('/alunos/add', (req, res) => {
    
    //para testar
    //res.write("GET PARA ALUNOS ADD");
    //res.end();
    res.sendFile(path.join(__dirname, '..', 'alunos.html'));
});

roteador.post('/alunos/add', (req, res) => {

    //para testar
    console.log(req.body);

    //salvar no array
    todosAlunos.push(req.body);

    console.log("Todos alunos:\n", todosAlunos);

    res.write("Aluno cadastrado");
    res.end();
});

module.exports = roteador;