
const express = require('express')
const router = express.Router();
const contactoController = require('../controller/contactoController')

router.post('/crear-contacto', contactoController.crearContacto)
router.get('/obtener-listas-contactos', contactoController.obtenerContactos)
router.get('/obtener-contacto/:id', contactoController.obtenerContacto)
router.put('/actualizar-contacto/:id', contactoController.actualizarContacto)
router.delete('/borrar-contacto/:id', contactoController.borrarContacto)

module.exports = router