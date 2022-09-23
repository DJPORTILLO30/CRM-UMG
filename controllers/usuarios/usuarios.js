const {matchedData} = require("express-validator");
const {usersModel} = require ("../../models/usuarios/usuarios");

/**
 * Este es el controlador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerUserCtrl = async (req, res) =>{
    res.send({data: "Hello World!"})
};

/**
 * Este es el controlador encargado de iniciar sesión.
 * @param {*} req 
 * @param {*} res 
 */
const loginUserCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email});

        if(!user){
            console.log("Usuario no existe", 404)
            return
        };
        
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);

        if(!check){
            console.log("Constraseña no válida", 401)
            return
        };

        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})

    }catch(e){
        console.log(e)
    }
};

module.exports = {registerUserCtrl, loginUserCtrl}