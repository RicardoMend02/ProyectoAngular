const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("contacto", contactoSchema)