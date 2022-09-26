/**
 * Encontraras los controladores 
 */
/**
 * Muestra la lista de Llamadas
 */
const getCalls = (req, res) => 
{

    res.send({mensaje: "llamadas"});

}

/**
 *Muestra el detalle de una Llamada
 */
const getCall = (req, res) =>
 {

    res.send({mensaje: "llamadas"});

}

/**
 * Inserta una llamada 
 */
const createCall = (req, res) =>
 {

    res.send({mensaje: "llamadas"});

}

/**
 * Modifica una Llamada
 */
const updateCall = (req, res) =>
 {

    res.send({mensaje: "llamadas"});

}

/**
 * Elimina una Llamada
 */
const deleteCall= (req, res) => 
{

    res.send({mensaje: "llamadas"});

}

module.exports = {getCalls, getCall, createCall, updateCall, deleteCall}