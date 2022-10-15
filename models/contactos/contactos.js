const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//Modelo del contactos

const Contact = sequelize.define(
  "contactos",
  {
    propietarioContacto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    departamento:{
      type:DataTypes.STRING,
    },
    direccion:{
      type:DataTypes.STRING,
    },
    descripcion:{
      type:DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = Contact;

  