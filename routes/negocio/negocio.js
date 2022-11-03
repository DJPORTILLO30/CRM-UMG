const express = require("express");
const { authMiddleware} = require("../../middleware/sesion");
const { checkRol} = require("../../middleware/rol");
const router= express.Router();
const {
     getBusi,
     getBusis,
     createBusi, 
     updateBusi, 
     deleteBusi
      
} = require("../../controllers/negocio/negocio");

/**
 * Mostrar lista de negocios
 */
router.get("/", authMiddleware ,  checkRol(['admin']) , getBusis);

/**
 * Mostrar detalles
 */
router.get("/:id", getBusi);

/**
 * Crear un negocio
 */
router.post("/", createBusi);

/**
 * Actualiza un negocio
 */
router.put("/:id", updateBusi);

/**
 * Elimina un negocio
 */
router.delete("/:id", deleteBusi);


module.exports = router;