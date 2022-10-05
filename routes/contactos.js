const express = require("express");
const router = express.Router();
const {getContacts, getContact, createContact, updateContact, deleteContact} = require("../../controllers/contactos/contactos")

//Ruta para listar contactos
router.get("/", getContacts);
//Ruta para listar contacto
router.get("/", getContact);
//Ruta para crear contactos
router.post("/", createContact);
//Ruta para actualizar contactos
router.put("/", updateContact);
//Ruta para eliminar contactos
router.delete("/", deleteContact);

module.exports = router


