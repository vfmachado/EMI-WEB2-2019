
const express = require('express');
const db = require('../database');
const router = express.Router();


router.get('/verRemedios', (req, res) => {

    db.execute("SELECT * FROM remedio")
    .then(result =>{
        console.log(result[0]);
        
        res.render('template', {prods: result[0]});
        //res.write(JSON.stringify(result[0]));
        //res.end();
    })
    .catch(err => {console.log(err)});
});

router.get('/addRemedio', (req, res) => {
    res.render('template-add-remedio');
});


router.post('/addRemedio', (req, res) => {
    
    console.log(req.body.nome, req.body.preco, req.body.descricao);
    let nome = req.body.nome;
    let preco = req.body.preco;
    let descricao = req.body.descricao;
    
    //INSERT INTO `remedio` (`nome`, `preco`, `descricao`) VALUES ('ProfVini', '1000000', 'Cura notas baixas');
    let query = `INSERT INTO remedio (nome, preco, descricao) 
        VALUES ("${nome}", ${preco}, "${descricao}");`;
    console.log("vou executar: ", query);
    
    db.execute(query)
        .then(result => {
            res.write("OK");
            res.end();
        })
        .catch(erro => {
            res.write("DEU RUIM....")
            res.write(JSON.stringify(erro));
            res.end();
        })
    

});


router.get('/verRemedio/:id', (req, res) => {
    //mostrar uma página só com o remédio do ID.
    //Caso não tenha remédio com o ID, mostre uma msg de erro
});

module.exports = router;
