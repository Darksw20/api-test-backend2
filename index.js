// Módulos importados
const express = require('express');

// Módulos locales
const routes = require('./src/routes');

// Configurar variables de entorno
require('dotenv').config();

// Servidor de express
const app = express();
app.use(routes);

let port = process.env.PORT || 3000;

// Inicializar servidor
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
