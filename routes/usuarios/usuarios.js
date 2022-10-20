const express = require("express");
const router = express.Router();
const {getUsers, getUser,registerUser, updateUser, deleteUser, loginUser,} = require ("../../controllers//usuarios/usuarios");
const { validatorGetUser, validatorLoginUser, validatorRegisterUser, validatorUpdateUser } = require("../../validators/usuarios");
const {authMiddleware} = require ("../../middleware/sesion")
const {checkRol} = require("../../middleware/rol")


/**
 * Ruta para listar los usuarios
 */
router.get("/", getUsers);

/**
 * Ruta para devolver el detalle de un usuario
 */
router.get("/:id", validatorGetUser, getUser);

/**
 * Ruta para registrar un usuario
 */
router.post("/register", validatorRegisterUser, registerUser);

/**
 * Ruta para modificar un usuario
 */
router.put("/:id",validatorUpdateUser, updateUser);

/**
 * eliminar un usuario
 */
router.delete("/:id", validatorGetUser, authMiddleware, checkRol(["admin"]), deleteUser);
/**
 * ruta para iniciar sesión
 */
router.post("/login", validatorLoginUser, loginUser);

module.exports= router;