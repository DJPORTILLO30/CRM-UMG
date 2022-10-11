const express = require("express");
const router= express.Router();
const {

     getBusis, 
     getBusi,
     createBusi, 
     updateBusi, 
     deleteBusi
      
} = require("../../controllers/negocio/negocio");

/*Mostrar lista de negocios*/
router.get("/", getBusis);

/*Mostrar detalles*/
router.get("/:id", getBusi);

/*Crear un negocio*/
router.post("/", createBusi);

/*Actualiza un negocio*/
router.put("/:id", updateBusi);

/*Elimina un negocio*/
router.delete("/:id", deleteBusi);


module.exports = router;