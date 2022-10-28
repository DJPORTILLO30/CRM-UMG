const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Call = sequelize.define(
    "communicationType",
    {

        contactName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING
        },

         comunicationDate: {
            type: DataTypes.DATE
        }
    },
    {
        frezeTableName: true,
        timestamps:true
    }
);

Call.find = Call.findAll;
Call.findById = Call.findByPk;

module.exports ={

  callsModel: Call
}
