const {matchedData} = require('express-validator'); 
const campaignsModel = require("../../models/campañas/campañas")

//Obtener lista de campañas
const getCampaigns = async(req, res) => {
    try{
        const data = await campaignsModel.findAll({});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Obtener una campaña
const getCampaign = async (req, res) => {
    try{
        const {id} = req.params
        const data = await campaignsModel.findOne({where: {id}});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Crear una campaña
const createCampaign = async(req, res) => {
    try{
        const data = await campaignsModel.create(req.body);
        // res.status(201);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Actualizar una campaña
const updateCampaign = async(req, res) => {
    try{
        const id = req.params.id
        const data = await campaignsModel.update(req.body, {where:{id}});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Eliminar una campaña
const deleteCampaign = async(req, res) => {
    try{
        const {id} = req.params;
        const data = await campaignsModel.destroy({where:{id}});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}
//Exportar funciones
module.exports ={getCampaigns, getCampaign, createCampaign, updateCampaign, deleteCampaign}