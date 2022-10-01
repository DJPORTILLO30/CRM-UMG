/**
 * Encontraras los controladores 
 */
const {CallsModel}= require ("../../models/llamadas/llamadas")
const {matchedData} = require("express-validator")

/**
 * Muestra la lista de Llamadas
 */
const getCalls = async(req, res) => {
try{
    const call = await CallsModel.findAllData({});
    res.send({call});

} catch(e)
    {  
    //handleHttpError(res,"ERROR_GET_CALLS") 
     };
};

/**
 *Muestra el detalle de una Llamada
 */
const getCall = async(req, res) =>{
 try{
    req = matchedData(req);
    const {id} = req;
    const call = await CallsModel.finOneData(id)
    res.send({call});

} catch(e) 
    {
     //handleHttpError(res,"ERROR_GET_CALLS")
    };
};


/**
 * Inserta una llamada 
 */
const createCall = async(req, res) =>{
 try{
    const body = matchedData(req);
    const call = await CallsModel.create(body);
    res.send({call});

}catch(e)
    {
       //handleHttpError(res,'ERROR_CREATE_CALLS')  
    };   
};

/**
 * Modifica una Llamada
 */
const updateCall = async(req, res) =>{
 try {
    const {id, ...body} = matchedData(req);
    const call = await CallsModel.findOneAndUpdate(id, body);
    res.send({call});

}catch (e)
    {
         //handleHttpError(res,'ERROR_UPDATE_CALLS')
    }
};


/**
 * Elimina una Llamada
 */
const deleteCall= async (req, res) => {
try{
    req = matchedData(req)
    const{id} = req;
    const deleteResponse = await CallsModel.delete({id});
    const call = {deleted: deleteResponse.matchedCount};
    res.send({call});

}catch(e)
    {
       //handleHttpError(res,'ERROR_DELETE_CALLS')  
    };
};

module.exports = {getCalls, getCall, createCall, updateCall, deleteCall}