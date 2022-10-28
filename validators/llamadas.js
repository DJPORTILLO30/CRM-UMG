const {check} = require("express-validator");
const validateResults = require("../utils/handlers/handelValidator");

const validatorCreateBusi = [
    check("contactName")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("comunicationDate")
    .exists()
    .notEmpty(),
      
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];

//* validador para mostrar un item

const validatorGetBusi = [
    check("Id")
    .exists()
    .notEmpty(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];

//* validador para actualizar un item

const validatorUpdateBusi = [
    check("id")
    .exists()
    .notEmpty(), //* .isMongoId(), se le debe de agregar pero cuando se defina la base de datos 
    check("contactName")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("comunicationDate")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateBusi, validatorGetBusi, validatorUpdateBusi};