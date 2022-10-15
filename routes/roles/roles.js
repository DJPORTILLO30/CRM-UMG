const express = require("express");
const router = express.Router();
const { getRoles, insertRol, deleteRol, getRol } = require("../../controllers/roles/roles");


/* ruta para mostrar la lista de roles
 */
router.get("/", getRoles);

/* ruta para mostrar el detalle de un rol
 */
router.get("/:id", getRol);

/* ruta para insertar un rol
 */
router.post("/", insertRol);

/*
  ruta para eliminar un rol
 */
 router.delete("/:id", deleteRol);

 module.exports = router;

