const Produto = require('../models/Produto');

exports.mostraAddProduto = (req, res) => {
    res.render('add-produto', 
        {
            pageTitle: "Admin - Add Prod"   
        }
    );
};

exports.salvarProduto = (req, res) => {

    //add produto
    let novoProduto = new Produto(req.body.title);
    novoProduto.salvar();

   // res.write("Produto adicionado " + req.body.title);
   // res.end();
   res.redirect('/');
};