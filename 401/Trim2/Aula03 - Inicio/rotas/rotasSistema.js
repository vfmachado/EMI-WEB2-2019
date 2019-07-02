const express = require('express');
const router = express.Router();

//importar o modelo de produtos
const Produto = require('../models/Produto');

router.get('/', (req, res) => {
    res.render('lista-produtos', 
        {
            pageTitle: "Página Inicial",
            prods: Produto.getProdutos()    
        }
    );
});

router.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: "Erro 404"}); 
});

module.exports = router;