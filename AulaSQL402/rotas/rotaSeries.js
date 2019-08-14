
const express = require('express');

const controlador = require('../controller/controllerPrincipal');

const router = express.Router();

/*
router.get('/add-serie', (req, res) => {
    controlador.MostraPaginaAddSerie(req, res);
});
*/

router.get('/add-serie', controlador.MostraPaginaAddSerie);

router.post('/cadastrar', controlador.SalvarSerieNoBanco);


module.exports = router;