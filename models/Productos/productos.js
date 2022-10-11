const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

 //Creacion del modelo productos

const Product = sequelize.define(
    "products",
    {

    name: {

            type: DataTypes.STRING,
            allowNull: false

    },

    description: {
            type: DataTypes.STRING
    },

    Category: {
        type: DataTypes.STRING
    },

    Price: {
        type: DataTypes.INTEGER
    },

    Feature: {
        type: DataTypes.STRING
    },
},
{
    timestamps:true,
}
);

Product.find = Product.findAll;
Product.findById = Product.findByPk;

module.exports = Product;