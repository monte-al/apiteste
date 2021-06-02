const express = require('express');
const routes = express.Router();
var controller = require('../controllers/controller');

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json();
})
// Inserir Dados
routes.post('/calculo', controller.calculo);

module.exports = routes;