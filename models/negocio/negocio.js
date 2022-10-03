const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Busi = sequelize.define(
    "Busis",
    {

        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
        description: {
            type: DataTypes.STRING
        },
       
    }
    
);

Busi.find = Busi.findAll;
Busi.findById = Busi.findByPk;

module.exports = Busi;