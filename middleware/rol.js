const { handleHttpError } = require("../utils/handleError");

/**
 * array con roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req,res,next) => {
    try {
        const {user} = req;
        const rolesByUser = user.role;
        
        const checkValueRol = roles.some((rolSingle) => 
        rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpError(res,"INVALID_ROL",403)
            return;
        }
        next()
    } catch (e) {
        handleHttpError(res,"Error_permisson",403)
    }
}


module.exports = {checkRol}