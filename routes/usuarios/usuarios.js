const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getUser, getUsers, updateUser, deleteUser} = require ("../../controllers/usuarios/usuarios");


/**
 * Ruta para listar los usuarios
 */
router.get("/users", getUsers);

/**
 * Ruta para devolver el detalle de un usuario
 */
router.get("/users/:id",getUser);

/**
 * Ruta para registrar un usuario
 */
router.post("/users/register", registerUser);

/**
 * Ruta para modificar un usuario
 */
router.put("/users/:id", updateUser);

/**
 * eliminar un usuario
 */
router.delete("/users/:id", deleteUser);
/**
 * ruta para iniciar sesión
 */
router.post("/users/login", loginUser);

module.exports= router;