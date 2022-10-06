/**
 * Encontraras los controladores 
 */
const {callsModel}= require ("../../models/llamadas/llamadas")
const {matchedData} = require("express-validator")

/**
 * Muestra la lista de Llamadas
 */
const getCalls = async(req, res) => {
try{
    const call = await callsModel.findAllData({});
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
    const call = await callsModel.finOneData(id)
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
    const call = await callsModel.create(body);
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
    const call = await callsModel.findOneAndUpdate(id, body);
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
    const deleteResponse = await callsModel.delete({id});
    const call = {deleted: deleteResponse.matchedCount};
    res.send({call});

}catch(e)
    {
       //handleHttpError(res,'ERROR_DELETE_CALLS')  
    };
};

module.exports = {getCalls, getCall, createCall, updateCall, deleteCall}