
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
    res.write("Ok... requisicao post recebida<br>");
    res.write(req.body.email);
    res.end();
});

//no FINAL
module.exports = router; //faz com que exportemos o router como um módulo e,
//o router do express JÁ É uma middleware function