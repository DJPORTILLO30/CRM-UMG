const express = require("express");
const router= express.Router();
const {
     getBusi,
     createBusi, 
     updateBusi, 
     deleteBusi
      
} = require("../../controllers/negocio/negocio");

/**
 * Mostrar lista de negocios
 */
router.get("/", (req, res) => {
     console.log("HELLO MAI FRENS");
     res.send({mensaje: "hola123"})
 });

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