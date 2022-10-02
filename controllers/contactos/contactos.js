
const {matchedData} = require('express-validator'); 
const {contactsModel} = require("../../models/contactos/contactos")

//Obtener lista de contactos
const getContacts = async (req, res) => {
    try{
        const data = await contactsModel.find({});
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Obtener un contacto
const getContact = async (req, res) => {
    try{
        const {id} = matchedData(req);
        const data = await contactsModel.findById(id);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Crear un contacto
const createContact = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await contactsModel.create(body);
        // res.status(201);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Actualizar un contacto
const updateContact = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await contactsModel.findOneAndUpdate(id, body);
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Eliminar un contacto
const deleteContact = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await contactsModel.findByIdAndDelete(id);
        const data = {
            deleted: deleteResponse.matchCount
        }
        res.send({ data });
    } catch (e) {
        console.log(e);
    }
}

//Exportar funciones
module.exports ={getContacts, getContact, createContact, updateContact, deleteContact}
