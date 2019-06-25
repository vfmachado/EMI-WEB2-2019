const express = require('express');
const router = express.Router();

//importar a definicao de produto
const Produto = require('../models/Produto');

router.get('/add-produto', (req, res) => {
    //mostrar a pagina com formulario
    res.render('add-produto',
         {pageTitle: "Admin - Add Prod"} );
});

router.post('/add-produto', (req, res) => {
    //adicionar o produto
    let prod = new Produto(req.body.title, 1000);
    prod.salvar();

    res.write("Produto Adicionado!");
    res.end();
});

module.exports = router;

