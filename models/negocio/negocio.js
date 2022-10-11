const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Busi = sequelize.define(
    "busis",
    { 

        name: {
            type: DataTypes.STRING,
            allowNull:false
        },

        contactName: {
            type: DataTypes.STRING
        },

        amount:{
            type: DataTypes.FLOAT
        },
        
        income:{
            type: DataTypes.FLOAT
        },

        ClosingDate:{
            type:DataTypes.DATE
        },

        campaingSource: {
            type: DataTypes.STRING
        },
       
        description: {
            type: DataTypes.STRING
        }
    },
    {

    timestamps:true,

    }
);

Busi.find = Busi.findAll;
Busi.findById = Busi.findByPk;

module.exports = Busi;