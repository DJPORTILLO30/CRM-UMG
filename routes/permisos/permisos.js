const express = require("express");
const router = express.Router();
const {getPermission, getPermissions, createPermission, deletePermission} = require("../../controllers/permisos/permisos");
const { validatorGetPermission, validatorCreatePermission } = require("../../validators/permisos");


/**
 * ruta para mostrar la lista de permisos
 */
router.get("/", getPermissions);

/**router.get("/",(req, res)=>{
    console.log(req.body);
   // res.send({id: 1234})
});*/

/**
 * ruta para mostrar el detalle de un permiso
 */
router.get("/:id", validatorGetPermission,getPermission);

/**
 * ruta para insertar un permisos
 */
router.post("/", validatorCreatePermission, createPermission);

/**
 * ruta para eliminar un permisos
 */
 router.delete("/:id", validatorGetPermission, deletePermission);


 module.exports= router;