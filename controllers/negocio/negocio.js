const {BusisModel}= require ("../../models/negocio/negocio")
const {matchedData} = require("express-validator")


/*Controla la lista de negocios*/
const getBusis = async(req, res) => {
try{
    const busi = await BusisModel.findAllData({});
    res.send({busi});

} catch(e)
    {  
    //handleHttpError(res,"ERROR_GET_BUSIS") 
     };
};
/*Controla los detalles mostrados de un negocio en especifico*/
const getBusi = async(req, res) =>{
    try{
       req = matchedData(req);
       const {id} = req;
       const busi = await BusisModel.finOneData(id)
       res.send({busi});
   
   } catch(e) 
       {
        //handleHttpError(res,"ERROR_GET_BUSIS")
       };
   };
/*Controla la creacion de negocios*/
const createBusi = async(req, res) =>{
    try{
       const body = matchedData(req);
       const busi = await BusisModel.create(body);
       res.send({busi});
   
   }catch(e)
       {
          //handleHttpError(res,'ERROR_CREATE_BUSIS')  
       };   
   };
/*Controla las actualizaciones de negocios*/
const updateBusi = async(req, res) =>{
    try {
       const {id, ...body} = matchedData(req);
       const busi = await BusisModel.findOneAndUpdate(id, body);
       res.send({busi});
   
   }catch (e)
       {
            //handleHttpError(res,'ERROR_UPDATE_BUSIS')
       }
   };
/*controla las eliminaciones de negocios*/
const deleteBusi = async(req, res) => {
    try{
        req = matchedData(req)
        const{id} = req;
        const deleteResponse = await BusisModel.delete({id});
        const busi = {deleted: deleteResponse.matchedCount};
        res.send({busi});
    
    }catch(e)
        {
           //handleHttpError(res,'ERROR_DELETE_BUSIS')  
        };
    };

module.exports = {getBusis, getBusi, createBusi, updateBusi, deleteBusi}

