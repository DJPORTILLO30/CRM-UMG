const{ check} = require ("express-validator");
const validateResults = require("../../utils/handlers/handelValidator")


const validatorCreateContacto = [
    check('propietarioContacto').not().notEmpty(),
    check('email').not().notEmpty(),
    check('phone').not().notEmpty(),
    check('direccion').isObject(),
    check('descripcion').not().notEmpty(),
    (req, res, next) =>{
      return validateResults(req, res, next)
    }
]

const validatorGetContacto = [

  check('id').exists().notEmpty(),
  (req, res, next) =>{
    return validateResults(req, res, next)
  }
]

module.exports = {
    validatorCreateContacto, validatorGetContacto
}