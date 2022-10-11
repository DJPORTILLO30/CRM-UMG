const {matchedData} = require('express-validator'); 
const {campaignsModel} = require("../../models/campañas/campañas")

//Obtener lista de campañas
const getCampaigns = async(req, res) => {
    try{
        const data = await campaignsModel.find({});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Obtener una campaña
const getCampaign = async (req, res) => {
    try{
        const {id} = matchedData(req);
        const data = await campaignsModel.findById(id);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Crear una campaña
const createCampaign = async(req, res) => {
    try{
        const body = matchedData(req);
        const data = await campaignsModel.create(body);
        // res.status(201);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Actualizar una campaña
const updateCampaign = async(req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await campaignsModel.findOneAndUpdate(id, body);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Eliminar una campaña
const deleteCampaign = async(req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await campaignsModel.findByIdAndDelete(id);
        const data = {
            deleted: deleteResponse.matchCount
        }
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}
//Exportar funciones
module.exports ={getCampaigns, getCampaign, createCampaign, updateCampaign, deleteCampaign}