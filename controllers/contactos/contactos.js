const { handleHttpError } = require("../../utils/handlers/handleError");
const {matchedData} = require('express-validator'); 
const contactModel = require("../../models/contactos/contactos")

//Obtener lista de contactos
const getContacts = async (req, res) => {
    try{
        const data = await contactModel.findAll({});
        res.send({ data });
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_CONTACTS");
    }
}

//Obtener un contacto
const getContact = async (req, res) => {
    try{
        const {id} = req.params
        const data = await contactModel.findOne({where:{id}});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Crear un contacto
const createContact = async (req, res) => {
    try{
        const data = await contactModel.create(req.body);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Actualizar un contacto
const updateContact = async (req, res) => {
    try{
        const id = req.params.id
        console.log(id) 
        console.log(req.body) 
        const data = await contactModel.update(req.body,{
            where:{id}
        });
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Eliminar un contacto
const deleteContact = async (req, res) => {
    try{
        const {id} = req.params;
        const data = await contactModel.destroy({where:{id}});
     
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Exportar funciones
module.exports ={getContacts, getContact, createContact, updateContact, deleteContact}
