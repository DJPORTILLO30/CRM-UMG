const {sequelize} = require("../../config/mysql");
const {DataTypes}= require ("sequelize");

const Rol = sequelize.define(
    "roles",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
       
        
    },
    {
        timestamps: true
    }
);

Rol.find = Rol.findAll;
Rol.findById = Rol.findByPk;
module.exports = Rol;

//comentario para commit//