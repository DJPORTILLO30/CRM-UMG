const {handleHttpError} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJWT");
const {userModel} = require('../models');
const { matchedData } = require("express-validator");
const getPropierties = require("../utils/handlePropertiesEngine")
const propiertiesKey = getPropierties()

const authMiddleware = async (req,res,next) =>{
    try {

        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN",401)
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res,"NOT_PAYLOAD_DATA",401);
            return
        }

        const query = {
            [propiertiesKey.id]: dataToken[propiertiesKey.id]
        }

        const user = await userModel.findOne(query)
        req.user = user

        next()
        
    } catch (e) {
        handleHttpError(res,"NOT_SESSION",401);
    }
}

module.exports = {authMiddleware}