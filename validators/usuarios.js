const { check } = require("express-validator");
const validateResults = require("../utils/handlers/handelValidator")

const validatorGetUser = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults (req, res, next)
    }
];

const validatorRegisterUser = [
    check("name").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("phone").exists().notEmpty(),
    check("company").exists().notEmpty(),
    check("role").exists().notEmpty(),
    check("state").exists().notEmpty(),
    check("password").exists().notEmpty().isLength({min: 6, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorUpdateUser =[
    check("id").exists().notEmpty(),
    check("name").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("phone").exists().notEmpty(),
    check("company").exists().notEmpty(),
    check("role").exists().notEmpty(),
    check("state").exists().notEmpty(),
    check("password").exists().notEmpty().isLength({min: 6, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorLoginUser = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 6, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports= {validatorGetUser, validatorRegisterUser, validatorUpdateUser, validatorLoginUser}