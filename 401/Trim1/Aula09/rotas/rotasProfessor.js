//criar um array para guardar os dados..
let usuarios = [];

const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/cadastrar', (req, res) => {
    //res.write("Voce fez um get...");
    //res.end();
    res.sendFile(
        path.join(
            __dirname, 
            '../', 
            'views', 
            'formularioCadastro.html'
        )
    );
});

router.post('/cadastrar', (req, res) => {
    //res.write("Ok... requisicao post recebida\n");
    //res.write(req.body.email);
    //res.end();

    usuarios.push({
        matricula: req.body.matricula, 
        nome: req.body.nome, 
        email: req.body.email
    });

    console.log(usuarios);

    //QUANDO TRABALHARMOS COM TEMPLATES... VAMOS UTILIZAR A OPÇÃO RENDER
    res.render("exemplo", {dados : usuarios});
});

//no FINAL
module.exports = router; //faz com que exportemos o router como um módulo e,
//o router do express JÁ É uma middleware function