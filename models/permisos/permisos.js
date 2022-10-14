const { sequelize } = require("../../config/mysql")
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
    },
    {
        timestamps: true
    }
);

Permission.find = Permission.findAll;
Permission.findById = Permission.findByPk;
Permission.findOneAndUpdate = Permission.findOneAndUpdate;
Permission.delete = Permission.destroy

module.exports={
    permissionsModel: Permission
}