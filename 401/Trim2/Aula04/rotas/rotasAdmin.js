const express = require('express');
const router = express.Router();

//const adminUsersController 
//const gerenciadorComentarioController
// ...
const adminController = require('../controllers/AdminController');

router.get('/add-produto', adminController.mostraAddProduct);

router.post('/add-produto', adminController.addProduct);

module.exports = router;

