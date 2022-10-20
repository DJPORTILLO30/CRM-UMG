const {handleHttpError} = require("../utils/handlers/handleError");
const { verifyToken } = require("../utils/handlers/handleJWT");
const {userModel} = require('../models/usuarios/usuarios');
const getProperties = require("../utils/handlers/handlePropierties") 
const propertiesKey = getProperties()

const authMiddleware = async (req,res,next) =>{
    try {

        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN",401)
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res,"NOT_PAYLOAD_DATA",401);
            return
        }

        const query = {
            [propertiesKey.id]:dataToken[propertiesKey.id]
        }

        const user = await userModel.findOne(query)
        req.user = user

        next()
        
    } catch (e) {
        handleHttpError(res,"NOT_SESSION",401);
        console.log(e)
        console.log(token)
    }
}

module.exports = {authMiddleware}