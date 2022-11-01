/**
 * Encontraras los controladores 
 */
const {callsModel}= require ("../../models/llamadas/llamadas");
const {handleHttpError} = require("../../utils/handlers/handleError");
const {matchedData} = require("express-validator")

/**
 * Muestra la lista de Llamadas
 */
const getCalls = async(req, res) => {
try{
    const data = await callsModel.find({});
    res.send({data});
    console.log(data)

} catch(e)
    {  
    handleHttpError(res,"ERROR_GET_CALLS") 
    console.log(e)
     };
};

/**
 *Muestra el detalle de una Llamada
 */
const getCall = async(req, res) =>{
 try{
 //    req = matchedData(req);
    const {id} = req.params;
    const data = await callsModel.findById(id)
    res.send({data});

} catch(e) 
    {
     handleHttpError(res,"ERROR_GET_CALLS")
    };
};


/**
 * Inserta una llamada 
 */
const createCall = async(req, res) =>{
 try{
     const {body} = req;
    const data = await callsModel.create(body);
    res.send({data});

}catch(e)
    {
        handleHttpError(res,'ERROR_CREATE_CALLS')  
    };   
};

/**
 * Modifica una Llamada
 */
const updateCall = async(req, res) =>{
 try {
    const {id, ...body} = matchedData(req);
    const data = await callsModel.update({
        contactName: req.body.contactName,
        description: req.body.description,
        comunicationDate: req.body.comunicationDate
    
    }, {where:{id: req.body.id}});


    res.send({data});

}catch (e)
    {
         handleHttpError(res,'ERROR_UPDATE_CALLS')
    }
};


/**
 * Elimina una Llamada
 */
const deleteCall= async (req, res) => {
try{
    const{id} = req.params;
    const deleteResponse = await callsModel.destroy({
        where: {
            id
        }
    
    });
    
    
    //const call = {deleted: deleteResponse.matchedCount};
    res.send({stauts:"OK"});

}catch(e)
    {
       console.log(e)
        handleHttpError(res,'ERROR_DELETE_CALLS')  
    };
};

module.exports = {getCalls, getCall, createCall, updateCall, deleteCall}