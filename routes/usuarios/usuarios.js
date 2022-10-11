const express = require("express");
const router = express.Router();
const {getUsers, getUser,registerUser, updateUser, deleteUser, loginUser,} = require ("../../controllers//usuarios/usuarios")



/**
 * Ruta para listar los usuarios
 */
router.get("/", getUsers);

/**
 * Ruta para devolver el detalle de un usuario
 */
router.get("/:id",(req, res)=>{
    console.log(req.body);
    res.send({id: 1234})
});

/**
 * Ruta para registrar un usuario
 */
router.post("/register", registerUser);

/**
 * Ruta para modificar un usuario
 */
router.put("/:id", updateUser);

/**
 * eliminar un usuario
 */
router.delete("/:id", deleteUser);
/**
 * ruta para iniciar sesión
 */
router.post("/login", loginUser);

module.exports= router;