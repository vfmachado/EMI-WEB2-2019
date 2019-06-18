

const express = require('express');

const path = require('path'); //para me ajudar na construção dos caminhos

//router do express
// permite criar um módulo de ROTAS 
// UTILIZAR CÓDIGO DE ROTEAMENTO DENTRO DE UM ARQUIVO 
// SEPARADO DA MINHA APLICAÇÃO.
const router = express.Router();

router.get('/pagina-inicial', (req, res) => {
    //res.write("Essa e a pagina inicial");
    //res.end();
    res.sendFile(
        //isto é um caminho
        path.join(
            __dirname, //ONDE ESTOU ... O ARQUIVO rotasCliente.js 
            "../", //volta uma pasta 
            "views/",   //junta com a pasta views
            "home.html"
        )
    );
});

//NO FINAL 
module.exports = router;

