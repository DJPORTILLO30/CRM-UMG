const express = require("express");
const {validatorGetContacto} = require("../../validators/contactos/contactos")
const router = express.Router();
const {getContacts, getContact, createContact, updateContact, deleteContact} = require("../../controllers/contactos/contactos")

//Ruta para listar contactos
router.get("/", getContacts, );
//Ruta para listar contacto
router.get("/:id",validatorGetContacto, getContact, );
//Ruta para crear contactos
router.post("/", createContact, );
//Ruta para actualizar contactos
router.put("/:id", updateContact );
//Ruta para eliminar contactos
router.delete("/:id", deleteContact);

module.exports = router