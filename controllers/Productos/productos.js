

/**
 * obtener una lista
 * @param {*} req 
 * @param {*} res 
 */

 const getItems = (req, res) => {

    const data = ["hola mundo"]

    res.send({data})

};

/**
 * ---
 * @param {*} req 
 * @param {*} res 
 */

const getItem = (req, res) => {

    const data = ["hola mundo"]

    res.send({data})

};

/**
 * --
 * @param {*} req 
 * @param {*} res 
 */

const createItem = (req, res) => {

    const data = ["hola mundo"]

    res.send({data})

};

/**
 * --
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = (req, res) => {

    const data = ["hola mundo"]

    res.send({data})

};

/**
 * --
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = (req, res) => {

    const data = ["hola mundo"]

    res.send({data})

};


module.exports = {getItems, getItem, createItem,updateItem,deleteItem};


