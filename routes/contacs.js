const express = require("express");
const router = express.Router();
const {getContacs, getContac, createContac, updateContac, deleteContac} = require("../controllers/contacs")

//Ruta para listar contactos
router.get("/", getContacs);
//Ruta para listar contacto
router.get("/", getContac);
//Ruta para crear contactos
router.post("/", createContac);
//Ruta para actualizar contactos
router.put("/", updateContac);
//Ruta para eliminar contactos
router.delete("/", deleteContac);

module.exports = router