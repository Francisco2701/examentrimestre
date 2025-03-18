const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/tasks');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Archivos estáticos (CSS, JS, imágenes)

// Usar rutas desde el archivo separado
app.use('/', userRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
