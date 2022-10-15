const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const getPropierties = require("../utils/handlePropertiesEngine")
const propiertiesKey = getPropierties()

/**
 * debes pasar el usuario
 * @param {*} user 
 */
const tokenSign = async (user) =>{
    console.log(propiertiesKey.id)
    const sign =  jwt.sign({
        [propiertiesKey.id]: user[propiertiesKey.id],
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h",
    }
    );
    return sign;
}
/**
 * debes pasar el token de sesion
 * @param {*} tokenJWT 
 * @returns 
 */
const verifyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT,JWT_SECRET)
    } catch (e) {
        return null
    }
}

module.exports  = {tokenSign,verifyToken}