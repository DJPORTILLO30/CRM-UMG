const {sequelize} = require ("../../config/mysql");
const {DataTypes} = require("sequelize");

const Permission = sequelize.define(
    "permissions",
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        }
    }
);

module.exports= Permission;