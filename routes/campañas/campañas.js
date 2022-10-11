const express = require("express");
const router = express.Router();
const {getCampaigns, getCampaign, createCampaign, updateCampaign, deleteCampaign} = require("../../controllers/campañas/campañas")

//Ruta para listar campañas
router.get("/", getCampaigns);
//Ruta para listar campaña
router.get("/", getCampaign);
//Ruta para crear campaña
router.post("/", createCampaign);
//Ruta para actualizar campaña
router.put("/", updateCampaign);
//Ruta para eliminar campaña
router.delete("/", deleteCampaign);

module.exports = router