const bcryptjs = require("bcryptjs");
/**
 * password sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) =>{
    const hash = await bcryptjs.hash(passwordPlain,10)
    return hash;
};
/**
 * pasar password sin encriptar y contras;ea encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = {encrypt,compare}