const Produto = require('../models/Produto');

exports.addProduct = (req, res) => {
     //adicionar o produto
     let prod = new Produto(req.body.title, 1000);
     prod.salvar();
 
     //res.write("Produto Adicionado!");
     //res.end();

     res.redirect('/');
};

exports.mostraAddProduct = (req, res) => {
    //mostrar a pagina com formulario
    res.render('add-produto',
         {pageTitle: "Admin - Add Prod"} );
};