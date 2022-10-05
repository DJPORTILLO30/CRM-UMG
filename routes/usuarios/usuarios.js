const express = require("express");
const router = express.Router();
const {registerUserCtrl, loginUserCtrl} = require ("../../controllers/usuarios/usuarios.js");


/**
 * Ruta para registrar un usuario
 */
router.post("/register", registerUserCtrl);


/**
 * ruta para iniciar sesión
 */
router.post("/login", loginUserCtrl);

module.exports = router;