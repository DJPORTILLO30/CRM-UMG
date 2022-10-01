const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const Producto = sequelize.define(
    "productos",
    {

    }
);
//Producto.find = Producto.findAll;
//Producto.findById = Producto.findByPk;
module.exports = Producto;