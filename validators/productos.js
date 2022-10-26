const {check} = require("express-validator");
const validateResults = require("../utils/handlers/handelValidator");

//* validador para la creacion de un item

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("Category")
    .exists()
    .notEmpty(),
    check("Price")
    .exists()
    .notEmpty(),
    check("Feature")
    .exists()
    .notEmpty(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];

//* validador para mostrar un item

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];

//* validador para actualizar un item

const validatorUpdateItem = [
    check("id")
    .exists()
    .notEmpty(), //* .isMongoId(), se le debe de agregar pero cuando se defina la base de datos 
    check("name")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("Category")
    .exists()
    .notEmpty(),
    check("Price")
    .exists()
    .notEmpty(),
    check("Feature")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateItem, validatorGetItem, validatorUpdateItem};