const express = require("express");
const router = express.Router();
const { mostrarPermisos, insertarPermiso, modificarPermiso, eliminarPermiso, mostrarPermiso } = require("../../controllers/permisos/permisos");


/**
 * ruta para mostrar la lista de permisos
 */
router.get("/", mostrarPermisos);

/**
 * ruta para mostrar el detalle de un permiso
 */
router.get("/:id", mostrarPermiso);

/**
 * ruta para insertar un permisos
 */
router.post("/", insertarPermiso);

/**
 * ruta para modificar un permisos
 */
router.put("/:id", modificarPermiso);

/**
 * ruta para eliminar un permisos
 */
 router.delete("/:id", eliminarPermiso);


 module.exports= router;