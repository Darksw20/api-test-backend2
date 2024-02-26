/* Archivo para definir rutas de la aplicación */
// Módulos importados
const express = require('express');

// Rutas de usuario
const users = require('./users.js');

// Router
const router = express.Router();

// Habilitar uso de JSON para endpoints
router.use(express.json());

// Definición de rutas
router.get('', (req, res) => {
    res.status(200).send({
        "status": 200,
        "msg": "Aplicación funcionando"
    });
});

// Rutas para manejar usuarios
router.use('/users', users);

module.exports = router;