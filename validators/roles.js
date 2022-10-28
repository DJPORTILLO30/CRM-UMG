const { check } = require("express-validator");
const validateResults = require("../utils/handlers/handelValidator")

const validatorGetRol = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults (req, res, next)
    }
];

const validatorCreateRol = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    (req, res, next) =>{
        return validateResults (req, res, next)
    }
];

module.exports = {validatorGetRol, validatorCreateRol}