const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Call = sequelize.define(
    "Calls",
    {

        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
        phone: {
            type: DataTypes.NUMBER
        }

    }
    
);

Call.find = Call.findAll;
Call.findById = Call.findByPk;

module.exports = Call;
