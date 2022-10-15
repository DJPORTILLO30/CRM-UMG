const {sequelize} = require("../../config/mysql");
const {DataTypes} = require("sequelize");

const User = sequelize.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        company:{
            type:DataTypes.STRING
        },
        role:{
            type: DataTypes.STRING
        },
        state:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    },
    {
        timestamps: true
    }
);

User.find = User.findAll;
User.findById = User.findByPk;
module.exports = {
    usersModel: User
}