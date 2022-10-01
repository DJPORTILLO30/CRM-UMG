const {matchedData} = require("express-validator");
const {usersModel} = require ("../../models/usuarios/usuarios");


/**
 * este es el controlador que muestra la lista de usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) =>{
    try{
        const data = await usersModel.findAllData({});
        res.send({data})
    }catch(e){
        //handleHttpError(res,"ERROR_GET_USERS")
    }
};


/**
 * Este controlador obtener el detalle de un usuario
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) => {
    try{
        req = matchedData(req);
        const {id}= req;
        const data = await usersModel.findOneData(id);
        res.send({data});
    }catch(e){
        //handleHttpError(res,"ERROR_GET_USER)
    }
};

/**
 * Este es el controlador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerUser = async (req, res) =>{
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
        //handleHttpError(res, "ERROR_REGISTER_USER")
    }
};

/**
 * Este es el controlador encargado de actualizar la información de un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) =>{
    try{
        const {id, ...body} = matchedData(req);
        const data = await usersModel.findOneAndUpdate(id, body);
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_UPDATE_USER')
    }
};

/**
 * Este controlador es el encargado de eliminar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await usersModel.delete({id});
        const data = {deleted: deleteResponse.matchedCount};
        res.send({data});
    }catch(e){
        //handleHttpError(res,'ERROR_DELETE_USER')
    }
};

/**
 * Este es el controlador encargado de iniciar sesión.
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email});

        if(!user){
            //handleHttpError(res, "USER_NOT_EXIST", 404);
            return
        };
        
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);

        if(!check){
            //handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        };

        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})

    }catch(e){
        //handleHttpError(res, "ERROR_LOGIN_USER")
    }
};


module.exports = {getUsers, getUser, registerUser, updateUser, deleteUser, loginUser}