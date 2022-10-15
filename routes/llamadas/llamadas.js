const express = require("express");
const router= express.Router();
const {

     getCalls,
     getCall,
     createCall,
     updateCall, 
     deleteCall
      
} = require("../../controllers/llamadas/llamadas");

/**
 * Encontraras las Rutas.
 */
/**
 * Muestra la lista de llamadas
 */
router.get("/", getCalls);

/**
 * Muestra el detalle de una llamada
 */

router.get("/:id", getCall);

/**
 * Inserta una llamada
 */

router.post("/:id", createCall);


/**
 * Modifica una llamada
 */
router.put("/:id", updateCall);


/**
 *  Elimina una llamada 
 */
router.delete("/:id", deleteCall);


module.exports = router;