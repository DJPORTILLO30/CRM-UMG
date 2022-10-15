const express = require("express");
const router = express.Router();
const {getCampaigns, getCampaign, createCampaign, updateCampaign, deleteCampaign} = require("../../controllers/campañas/campañas.js")
const {validatorGetCampaign, validatorCreateCampaign} = require("../../validators/campañas/campañas")

//Ruta para listar campañas
router.get("/", getCampaigns);
//Ruta para listar campaña
router.get("/:id", validatorGetCampaign, getCampaign);
//Ruta para crear campaña
router.post("/", validatorCreateCampaign, createCampaign);
//Ruta para actualizar campaña
router.put("/:id", validatorGetCampaign, updateCampaign);
//Ruta para eliminar campaña
router.delete("/:id", validatorGetCampaign, deleteCampaign);

module.exports = router