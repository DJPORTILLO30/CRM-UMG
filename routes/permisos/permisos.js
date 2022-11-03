const express = require("express");
const router = express.Router();
const {getPermission, getPermissions, createPermission, deletePermission} = require("../../controllers/permisos/permisos");
const { validatorGetPermission, validatorCreatePermission } = require("../../validators/permisos");
const {authMiddleware} = require ("../../middleware/sesion")
const {checkRol} = require("../../middleware/rol")

/**
 * ruta para mostrar la lista de permisos
 */
router.get("/", authMiddleware,checkRol(["admin"]),getPermissions);


/**
 * ruta para mostrar el detalle de un permiso
 */
router.get("/:id", authMiddleware,checkRol(["admin"]),validatorGetPermission,getPermission);

/**
 * ruta para insertar un permisos
 */
router.post("/", authMiddleware,checkRol(["admin"]), validatorCreatePermission, createPermission);

/**
 * ruta para eliminar un permisos
 */
 router.delete("/:id", authMiddleware,checkRol(["admin"]), validatorGetPermission, deletePermission);


 module.exports= router;