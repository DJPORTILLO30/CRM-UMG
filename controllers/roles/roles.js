const {rolesModel} = require("../../models/roles/roles")
const {matchedData, body} = require("express-validator")
/* este es el controlador encargado de mostrar la lista de roles
 */
const getRoles = async(req, res) =>{
    try{
        const data = await rolesModel.findAllData({});
        res.send({data});
    }catch(e){
        //handleHttpError(res,"ERROR_GET_ROLES")
    }; 
}


/* este es el controlador encargado de mostrar el detalle de un rol
 */
 const getRol = async(req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await rolesModel.findOneData(id);
        res.send({data});
    }catch(e){
        //handleHttpError(res,"ERROR_GET_ROLES")
    };
}

/* este es el controlador encargado de insertar un rol
 */
 const insertRol = async(req, res) =>{
    try{
        const body = matchedData(req);
        const data = await rolesModel.create(body);
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_CREATE_ROLES')
    };
}

/* este es el controlador encargado de modificar un rol
 */
 const updateRol = async (req, res) =>{
    try{
        const {id, ...body} = matchedData(req);
        const data = await rolesModel.findOneAndUpdate(id, body);
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_UPDATE_ROLES')
    };
}

/**
 * este es el controlador encargado de eliminar un rol
 */
 const deleteRol = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await permissionsRoles.delete({id});
        const data = {deleted: deleteResponse.matchedCount};
        res.send({data})
    }catch(e){
        //handleHttpError(res,'ERROR_DELETE_ROLES')
    };
}


module.exports={getRoles, getRol, insertRol, updateRol,deleteRol}