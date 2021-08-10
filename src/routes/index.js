const express = require('express');
const router = express.Router();
const indexController  = require('../controllers/indexController');
const clientController = require('../controllers/clientController');

router.get('/', indexController.index);
router.get('/cliente', clientController.pageClientForm);
router.get('/excluirCliente', clientController.deleteClient);

router.post('/clientes', clientController.getClients);
router.post('/cliente/submit', clientController.saveClient);

module.exports = router;