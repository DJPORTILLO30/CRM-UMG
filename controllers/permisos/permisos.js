const {permissionsModel} = require("../../models/permisos/permisos");
const { handleHttpError } = require("../../utils/handlers/handleError");
const {matchedData} = require('express-validator')

/**
 * este es el controlador encargado de mostrar la lista de permisos
 */
const getPermissions = async (req, res) =>{
    try{
        const data = await permissionsModel.find({});
        // console.log(data)
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_PERMISSIONS")
    }; 
};

/**
 * este es el controlador encargado de mostrar el detalle de un permiso
 */
 const getPermission = async(req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await permissionsModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_PERMISSION")
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
        handleHttpError(res,'ERROR_CREATE_PERMISSION')
    };
};


/**
 * este es el controlador encargado de eliminar un permiso
 */
 const deletePermission = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await permissionsModel.destroy({
            where: {
                id
            }
        });
        //const data = {deleted: deleteResponse.matchedCount};
        res.send({status: "OK"})
    }catch(e){
        console.log(e);
        handleHttpError(res,'ERROR_DELETE_PERMISSION')

    }
 }

module.exports={getPermission, getPermissions, createPermission, deletePermission}

