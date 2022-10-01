const {permissionsModel} = require("../../models/permisos/permisos")
const {matchedData} = require("express-validator")

/**
 * este es el controlador encargado de mostrar la lista de permisos
 */
const getPermissions = async(req, res) =>{
    try{
        const data = await permissionsModel.findAllData({});
        res.send({data});
    }catch(e){
        //handleHttpError(res,"ERROR_GET_PERMISSIONS")
    }; 
};

/**
 * este es el controlador encargado de mostrar el detalle de un permiso
 */
 const getPermission = async(req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await permissionsModel.findOneData(id);
        res.send({data});
    }catch(e){
        //handleHttpError(res,"ERROR_GET_PERMISSION")
    };
};

/**
 * este es el controlador encargado de insertar un permiso
 */
 const createPermission = async(req, res) =>{
    try{
        const body = matchedData(req);
        const data = await permissionsModel.create(body);
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_CREATE_PERMISSION')
    };
};

/**
 * este es el controlador encargado de modificar un permiso
 */
 const updatePermission = async (req, res) =>{
    try{
        const {id, ...body} = matchedData(req);
        const data = await permissionsModel.findOneAndUpdate(id, body);
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_UPDATE_PERMISSION')
    };
};

/**
 * este es el controlador encargado de eliminar un permiso
 */
 const deletePermission = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await permissionsModel.delete({id});
        const data = {deleted: deleteResponse.matchedCount};
        res.send({data})
    }catch(e){
        //handleHttpError(res,'ERROR_DELETE_PERMISSION')
    };
};


module.exports={getPermission, getPermissions, createPermission, updatePermission, deletePermission}

