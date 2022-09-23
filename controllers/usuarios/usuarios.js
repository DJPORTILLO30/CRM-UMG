const {matchedData} = require("express-validator");
const {usersModel} = require ("../usuarios");

/**
 * Este es el controlador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerUserCtrl = async (req, res) =>{
    try{
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, {strict:false});

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        };

        res.status(201)
        res.send({data})
    }catch (e){
        console.log(e)
    }
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