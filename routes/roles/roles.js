const express = require("express");
const router = express.Router();
const { getRoles, insertRol, deleteRol, getRol } = require("../../controllers/roles/roles");
const { validatorGetRol, validatorCreateRol} = require("../../validators/roles");


/* ruta para mostrar la lista de roles
 */
router.get("/", getRoles);

/* ruta para mostrar el detalle de un rol
 */
router.get("/:id", validatorGetRol, getRol);

/* ruta para insertar un rol
 */
router.post("/", validatorCreateRol, insertRol);

/*
  ruta para eliminar un rol
 */
 router.delete("/:id", validatorGetRol, deleteRol);

 module.exports = router;

