const rolesModel = require("../../models/roles/roles")
const {matchedData} = require("express-validator")
const { handleHttpError } = require("../../utils/handlers/handleError");

/* este es el controlador encargado de mostrar la lista de roles
 */
const getRoles = async(req, res) =>{
    try{
        const data = await rolesModel.find({});
        res.send({data});
        
    }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_GET_ROLES")
    }; 
}


/* este es el controlador encargado de mostrar el detalle de un rol
 */
 const getRol = async(req, res) =>{
    try{
        // req = matchedData(req);
        const {id} = req.params;
        const data = await rolesModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_ROLES")
    };
}

/* este es el controlador encargado de insertar un rol
 */
 const insertRol = async(req, res) =>{
    try{
        const {body} = req;
        console.log(body)
        const data = await rolesModel.create(body);
        res.send({data});
    }catch(e){
        console.log(e);
        handleHttpError(res,'ERROR_CREATE_ROLES')
    };
}



/**
 * este es el controlador encargado de eliminar un rol
 */
 const deleteRol = async (req, res) =>{
    try{
        const {id} = req.params;
        const deleteResponse = await rolesModel.destroy({where: {id}});;
        const data = {deleted: deleteResponse.matchedCount};
        res.send({data})
    }catch(e){
        console.log(e)
        handleHttpError(res,'ERROR_DELETE_ROLES')
    };
}


module.exports={getRoles, getRol, insertRol, deleteRol}

