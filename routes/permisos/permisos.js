const express = require("express");
const router = express.Router();
const {getPermission, getPermissions, createPermission, updatePermission, deletePermission} = require("../../controllers/permisos/permisos");


/**
 * ruta para mostrar la lista de permisos
 */
router.get("/", getPermissions);

/**
 * ruta para mostrar el detalle de un permiso
 */
router.get("/:id", getPermission);

/**
 * ruta para insertar un permisos
 */
router.post("/", createPermission);

/**
 * ruta para modificar un permisos
 */
router.put("/:id", updatePermission);

/**
 * ruta para eliminar un permisos
 */
 router.delete("/:id", deletePermission);


 module.exports= router;