const { check } = require("express-validator");
const validateResults = require("../../utils/handlers/handelValidator")

const validatorGetCampaign = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults (req, res, next)
    }
];

const validatorCreateCampaign = [
    check("propietarioCampania").exists().notEmpty(),
    check("nombreCampania").exists().notEmpty(),
    check("idTipoCampania").exists().notEmpty(),
    check("fechaInicio").exists().notEmpty(),
    check("fechaFin").exists().notEmpty(),
    check("estado").exists().notEmpty(),
    check("descripcion").exists().notEmpty(),
    (req, res, next) =>{
        return validateResults (req, res, next)
    }
];


module.exports = {validatorGetCampaign, validatorCreateCampaign, validatorUpdateCampaign}