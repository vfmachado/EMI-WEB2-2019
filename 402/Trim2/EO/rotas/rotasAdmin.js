const express = require('express');
const router = express.Router();

const controle = require('../controllers/adminController');

router.get('/add-product', controle.mostraAddProduto);

router.post('/add-product', controle.salvarProduto);

module.exports = router;