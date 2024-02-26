/* Archivo para definir rutas de la aplicaci�n */
// M�dulos importados
const express = require('express');

// Rutas de usuario
const users = require('./users.js');

// Router
const router = express.Router();

// Habilitar uso de JSON para endpoints
router.use(express.json());

// Definici�n de rutas
router.get('', (req, res) => {
    res.status(200).send({
        "status": 200,
        "msg": "Aplicaci�n funcionando"
    });
});

// Rutas para manejar usuarios
router.use('/users', users);

module.exports = router;