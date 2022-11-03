const express = require("express");
const router = express.Router();
const { getRoles, insertRol, deleteRol, getRol } = require("../../controllers/roles/roles");
const { validatorGetRol, validatorCreateRol} = require("../../validators/roles");
const {authMiddleware} = require ("../../middleware/sesion")
const {checkRol} = require("../../middleware/rol")

/* ruta para mostrar la lista de roles
 */
router.get("/",authMiddleware,checkRol(["admin"]), getRoles);

/* ruta para mostrar el detalle de un rol
 */
router.get("/:id", authMiddleware,checkRol(["admin"]),validatorGetRol, getRol);

/* ruta para insertar un rol
 */
router.post("/", authMiddleware,checkRol(["admin"]),validatorCreateRol, insertRol);

/*
  ruta para eliminar un rol
 */
 router.delete("/:id", authMiddleware,checkRol(["admin"]),validatorGetRol, deleteRol);

 module.exports = router;

