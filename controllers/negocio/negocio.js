const {busisModel}= require ("../../models/negocio/negocio");
const {handleHttpError} = require("../../utils/handlers/handleError");
const {matchedData} = require("express-validator")


/**
 * Controla la lista de negocios
 */
const getBusis = async(req, res) => {
try{
    const data = await busisModel.find({});
    res.send({data});
    console.log(data)

} catch(e)
    {  
    handleHttpError(res,"ERROR_GET_BUSIS") 
    console.log(e)
     };
};
/**
 * Controla los detalles mostrados de un negocio en especifico
 */
const getBusi = async(req, res) =>{
    try{
    //    req = matchedData(req);
       const {id} = req.params;
       console.log(id);
       const data = await busisModel.findById(id)
       res.send({data});
   
   } catch(e){
        console.log(e);
        handleHttpError(res,"ERROR_GET_BUSIS")
       };
   };
/**
 * Controla la creacion de negocios
 * */
const createBusi = async(req, res) =>{
    try{
        const {body} = req;
       const data = await busisModel.create(body);
       res.send({data});
   
   }catch(e){
        console.log(e);
        handleHttpError(res,'ERROR_CREATE_BUSIS')  
    };
   };
/**
 * Controla las actualizaciones de negocios*
 */
const updateBusi = async(req, res) =>{
    try {
       const {id, ...body} = matchedData(req);
       const data = await busisModel.update({
        name: req.body.name,
        contactName: req.body.contactName,
        amount: req.body.amount,
        income: req.body.income,
        closingDate: req.body.closingDate,
        campaingSource: req.body.campaingSource,
        description: req.body.description,

    }, {where:{id}});

    res.send({data});
   
   }catch (e)
       {
            handleHttpError(res,'ERROR_UPDATE_BUSIS')
       }
   };
/**
 * controla las eliminaciones de negocios
 */
const deleteBusi = async(req, res) => {
    try{
        req = matchedData(req)
        const{id} = req;
        const deleteResponse = await busisModel.destroy({
            where: {
                id
        }
    });
        //const busi = {deleted: deleteResponse.matchedCount};
        res.send({status: "OK"});
    
    }catch(e)
        {
            console.log(e)
           handleHttpError(res,'ERROR_DELETE_BUSIS')  
        }
    }

module.exports = {getBusis, getBusi, createBusi, updateBusi, deleteBusi}

